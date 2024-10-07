import { Item } from "@/types/Items";
import { getItemList } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

export const ItemsPage = async () => {
  const data: Item[] = await getItemList();

  return (
    <>
      <div className="flex justify-center my-10 text-[40px] font-bold">
        아이템 목록
      </div>
      <>
        <div className="flex flex-wrap justify-center">
          {data.map((item) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex flex-col items-center text-center m-4 border border-white p-4 w-[200px]"
              >
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                  alt={`${item.name}`}
                  width={150}
                  height={150}
                />
                <div className="mt-3 font-bold text-[18px]">{item.name}</div>
                <div
                  className="text-sm mt-1 text-gray-500"
                  title={item.plaintext}
                >
                  {item.plaintext.length > 44
                    ? `${item.plaintext.slice(0, 44)}...`
                    : item.plaintext}
                </div>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default ItemsPage;
