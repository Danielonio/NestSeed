import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLogger } from '../logging/custom.logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new CustomLogger(`HTTP`);
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.debug(
      `[REQUEST] Method: ${req.method}  Url: ${req.originalUrl}`,
    );

    res.on('close', () => {
      this.logger.debug(
        `
        [RESPONSE]
        Method: ${req.method}  
        Url: ${req.originalUrl} 
        ResponseCode: ${res.statusCode}
        `,
      );
    });

    next();
  }
}
