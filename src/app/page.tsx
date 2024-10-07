"use client";
import { getChampionList, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getLatestVersion();
    getChampionList();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="flex justify-center my-10 text-[40px] font-bold">
            리그 오브 레전드 정보 앱
          </h1>
          <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
        </div>

        <div className="flex flex-col">
          <Link href={"/champions"}>
            <Image
              src={`https://img.danawa.com/cp_images/service/79/3428645/150172432401670489095.jpg`}
              alt={`챔피언 사진`}
              width={500}
              height={300}
            />
            챔피온 목록 보기
          </Link>

          <Link href={"/items"}>
            <Image
              src={`https://i3.ruliweb.com/ori/20/11/11/175b5b92d4134a3fd.jpeg`}
              alt={`챔피언 사진`}
              width={500}
              height={300}
            />
            아이템 목록 보기
          </Link>

          <Link href={"/rotation"}>
            <Image
              src={`https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2161543A539F26491A`}
              alt={`챔피언 사진`}
              width={500}
              height={300}
            />
            로테이션 챔피언 목록 보기
          </Link>
        </div>
      </div>
    </>
  );
}
