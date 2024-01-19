interface DungeonsAndDragonsMonsterNameAndIndex {
  index: string;
  name: string;
  url: string[];
}

export interface DungeonsAndDragonsMonsterList {
  count: number;
  results: DungeonsAndDragonsMonsterNameAndIndex[];
}
