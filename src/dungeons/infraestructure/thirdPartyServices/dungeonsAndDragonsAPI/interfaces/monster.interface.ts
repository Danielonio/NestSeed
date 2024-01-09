export interface DungeonsAndDragonsMonster {
  index: string;
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: {
    walk: string;
    swim: string;
  };
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: [
    {
      value: number;
      proficiency: {
        index: string;
        name: string;
        url: string;
      };
    },
  ];
  damage_vulnerabilities: [];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: [
    {
      index: string;
      name: string;
      url: string;
    },
  ];
  senses: {
    darkvision: string;
    passive_perception: number;
  };
  languages: string;
  challenge_rating: number;
  xp: number;
  special_abilities: [
    {
      name: string;
      desc: string;
      attack_bonus: number;
      damage: [
        {
          damage_type: {
            index: string;
            name: string;
            url: string;
          };
          damage_dice: string;
        },
      ];
    },
  ];
  actions: [
    {
      name: string;
      desc: string;
      options: {
        choose: number;
        from: [
          [
            {
              name: string;
              count: number;
              type: string;
            },
            {
              name: string;
              count: number;
              type: string;
            },
          ],
          [
            {
              name: string;
              count: number;
              type: string;
            },
          ],
        ];
      };
      damage: [];
    },
  ];
  url: string;
}
