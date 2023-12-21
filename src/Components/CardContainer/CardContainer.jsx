import React from "react";
import LotteryCard from "./LotteryCard";

let lotteryData = [
  "123.321",
  "140.324",
  "042.234",
  "123.321",
  "186.589",
  "0.25.570",
];

const CardContainer = () => {
  return (
    <div className="px-12 grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-8 ">
      {lotteryData?.map((item) => {
        return <LotteryCard item={item} />;
      })}
    </div>
  );
};

export default CardContainer;
