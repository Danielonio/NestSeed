import { ConsoleLogger } from '@nestjs/common';
import { ContextService } from './context.service';

export class CustomLogger extends ConsoleLogger {
  log(message: string) {
    super.log(`📢 ${CustomLogger.getRequestId()}` + message);
  }

  error(message: string) {
    super.error(`❌ ${CustomLogger.getRequestId()}` + message);
  }

  warn(message: string) {
    super.warn(`⚠️ ${CustomLogger.getRequestId()}` + message);
  }

  debug(message: string) {
    super.debug(`🐞 ${CustomLogger.getRequestId()}` + message);
  }

  private static getRequestId(): string {
    const id = ContextService.get(ContextService.KEYS.REQUEST_ID);
    return id ? `[${id}]` : '';
  }
}
