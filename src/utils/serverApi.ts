// 서버에서 실행 ("use server 가 없다면 CSR로 됨")
"use server";

import { Champion } from "@/types/Champion";
import { Item } from "@/types/Items";

// 최신 버전
export const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();
  return data[0];
};

// 챔피언 전체 목록
export const getChampionList = async () => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );
    const data = await res.json();
    const champions: Champion[] = Object.values(data.data);

    return champions;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// 챔피언 상세정보
export const getChampionDetail = async (id: string) => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
    );
    const data = await res.json();
    const champion: Champion = data.data[id];
    return champion;
  } catch (error) {
    console.log(error);
  }
};

// 아이템 리스트
export const getItemList = async () => {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );
    const data = await res.json();
    const items: Item[] = Object.values(data.data);
    return items;
  } catch (error) {
    console.log(error);
    return [];
  }
};
