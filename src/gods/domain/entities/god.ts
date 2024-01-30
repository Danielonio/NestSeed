export class God {
  id: string;
  name: string;
  culture: string;
  powers: string[];

  constructor(id: string, name: string, culture: string, powers: string[]) {
    this.id = id;
    this.name = name;
    this.culture = culture;
    this.powers = powers;
  }
}
