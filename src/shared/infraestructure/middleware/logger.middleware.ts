import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLogger } from '../logging/custom.logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new CustomLogger(`HTTP`);
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.debug(`Request: ${req.method}  ${req.originalUrl}`);
    next();
  }
}
