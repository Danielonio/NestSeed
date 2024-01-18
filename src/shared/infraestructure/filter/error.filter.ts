import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomLogger } from '../logging/custom.logger';
import { ContextService } from '../logging/context.service';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  private logger = new CustomLogger(ErrorFilter.name);

  private static getRequestId(): string {
    const id = ContextService.get(ContextService.KEYS.REQUEST_ID);
    return id ? `${id}` : '';
  }

  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    let status = 500;
    let res = {
      requestId: ErrorFilter.getRequestId(),
      timestamp: new Date().toISOString(),
      statusCode: 500,
      message: undefined,
    };

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      res.statusCode = status;

      if (exception instanceof UnprocessableEntityException) {
        res.message = exception.getResponse()['message'];
      }
    }

    const logInfo = {
      method: request.method,
      path: request.url,
      message: exception.message,
      responseStatusCode: status,
      stack: exception.stack,
    };

    this.logger.error(JSON.stringify(logInfo));
    response.status(status).json(res);
  }
}
