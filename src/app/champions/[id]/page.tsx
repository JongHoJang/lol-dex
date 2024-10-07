// import { ChampionDetail } from "@/types/Champion";
import { getChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: { id: string };
};

// 동적 메타데이터
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.id;
  const champion = await getChampionDetail(id);

  if (!champion) {
    throw new Error("Failed to fetch champion details");
  }

  return {
    title: champion.name ?? "리그 오브 레전드 정보 앱",
    description: champion.title ?? "리그 오브 레전드 정보 앱입니다.",
  };
};

// 상세페이지
const DetailPage = async ({ params }: Props) => {
  const data = await getChampionDetail(params.id);

  if (!data) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <>
      <div className="bg-gray-700 h-screen">
        <div className="flex justify-center items-center">
          <div className="w-[650px] border border-white p-10 mt-[100px] rounded-lg shadow-2xl bg-gray-800">
            <div className="text-2xl font-bold mb-2">{data.name}</div>
            <div className="text-lg text-gray-400 mb-4">{data.title}</div>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`}
              alt={`${data.name}`}
              width={200}
              height={200}
              className=" mx-auto mb-4 rounded-lg"
            />
            <div className="text-sm text-gray-300 mb-6">{data.blurb}</div>
            <div className="text-xl font-semibold mb-2">스탯</div>
            <ul className="text-sm space-y-1">
              <li className="flex">
                <span>공격력 : </span> <span>{data.info.attack}</span>
              </li>
              <li className="flex">
                <span>방어력 : </span> <span>{data.info.defense}</span>
              </li>
              <li className="flex">
                <span>마법력 : </span> <span>{data.info.magic}</span>
              </li>
              <li className="flex">
                <span>난이도 : </span> <span>{data.info.difficulty}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
