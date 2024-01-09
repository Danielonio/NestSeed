import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomLogger } from '../logging/custom.logger';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  private logger = new CustomLogger(ErrorFilter.name);
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = 500;
    let res = {
      timestamp: new Date().toISOString(),
      path: request.url,
      statusCode: 500,
    };
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      res.statusCode = status;
    }

    const extraLogInfo = {
      stack: exception.stack,
      message: exception.message,
    };

    this.logger.error(JSON.stringify({ res, extraLogInfo }));
    response.status(status).json(res);
  }
}
