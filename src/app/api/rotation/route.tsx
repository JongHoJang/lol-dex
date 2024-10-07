import { NextResponse } from "next/server";
import { ChampionRotation } from "@/types/ChampionRotation";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API 키가 없습니다" });
  }

  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "챔피언 로테이션 데이터를 가져오지 못했습니다." },
        { status: response.status }
      );
    }

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("오류 발생:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
