import { Body, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLogger } from '../logging/custom.logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new CustomLogger(`HTTP`);
  use(req: Request, res: Response, next: NextFunction) {
    const requestBodyLog = this.getBodyLogSting(req.body);
    this.logger.debug(
      `[REQUEST] Method: ${req.method} | Url: ${req.originalUrl} ${requestBodyLog}`,
    );

    let responseBody = {};
    const chunks = [];
    const oldEnd = res.end;
    res.end = (chunk) => {
      if (chunk) {
        chunks.push(Buffer.from(chunk));
      }
      responseBody = Buffer.concat(chunks).toString('utf8');
      return oldEnd.call(res, responseBody);
    };

    const responseBodyLog = this.getBodyLogSting(responseBody);
    res.on('close', () => {
      this.logger.debug(
        `[RESPONSE] Method: ${req.method} | Url: ${req.originalUrl} | ResponseCode: ${res.statusCode} ${responseBodyLog}`,
      );
    });

    next();
  }

  getBodyLogSting(body): string {
    const bodyLog = body ? `| Body: ${JSON.stringify(body)} ` : undefined;
    return bodyLog;
  }
}
