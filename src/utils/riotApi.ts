import { rotationChampionList } from "@/types/ChampionRotation";
import { getChampionList } from "./serverApi";

export const getChampionRotation = async () => {
  // 전체 챔피온 리스트
  const championData = await getChampionList();

  // 로테이션 챔피온 리스트
  const res = await fetch("/api/rotation");
  if (!res.ok) {
    throw new Error("챔피언 로테이션 데이터를 가져오지 못했습니다.");
  }
  const rotationData: rotationChampionList = await res.json();
  console.log(rotationData);

  const rotationChampions = championData.filter((champion) => {
    return rotationData.freeChampionIds.includes(Number(champion.key));
  });

  return rotationChampions;
};
