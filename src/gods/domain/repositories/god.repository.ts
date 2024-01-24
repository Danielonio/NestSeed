import { God } from '../entities/god';

export abstract class GodRepository {
  abstract getGods();
  abstract createGod(god: God);
}
