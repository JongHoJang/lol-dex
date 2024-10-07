export type ChampionRotation = {
  freeChampionIds: rotationChampionList;
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
};

export type rotationChampionList = {
  [key: string]: number[];
};
