import { Champion } from "@/types/Champion";
import { getChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ChampionsPage = async () => {
  const data: Champion[] = await getChampionList();

  return (
    <>
      <div>
        <div className="flex justify-center my-10 text-[30px] font-bold">
          챔피언 목록
        </div>
        <>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {data.map((champ) => {
              return (
                <Link key={champ.key} href={`/champions/${champ.id}`}>
                  <div className="relative flex flex-col items-center text-center border border-white p-4 w-[230px] h-[400px]">
                    <Image
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`}
                      alt={`${champ.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-white text-center rounded">
                      <div className=" font-bold text-[18px]">{champ.name}</div>
                      <div className="text-sm mt-1 text-gray-200">
                        {champ.title}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      </div>
    </>
  );
};

export default ChampionsPage;
