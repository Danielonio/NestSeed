import { God } from '../entities/god';

export abstract class GodRepository {
  abstract getGods();
  abstract saveGod(god: God);
}
