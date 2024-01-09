import { ConsoleLogger } from '@nestjs/common';

export class CustomLogger extends ConsoleLogger {
  log(message: string) {
    super.log('📢 ' + message);
  }

  error(message: string) {
    super.error('❌ ' + message);
  }

  warn(message: string) {
    super.warn('⚠️ ' + message);
  }

  debug(message: string) {
    super.debug('🐞 ' + message);
  }
}
