import * as ContextStore from 'request-context';
import { v4 as uuidv4 } from 'uuid';

export class ContextService {
  static KEYS = {
    REQUEST_ID: 'request:id',
    REQUEST_IP: 'request:ip',
    REQUEST_USERID: 'request:userId',
  };

  static middleware(req, _res, next) {
    ContextService.set(ContextService.KEYS.REQUEST_ID, uuidv4());
    ContextService.set(ContextService.KEYS.REQUEST_IP, req.ip);
    ContextService.set(ContextService.KEYS.REQUEST_USERID, req.headers?.userid);

    next();
  }

  static set(key: string, value: any) {
    ContextStore.set(key, value);
  }

  static get(key: string): any {
    return ContextStore.get(key);
  }
}
