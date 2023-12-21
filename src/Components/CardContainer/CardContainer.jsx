import React from "react";
import LotteryCard from "./LotteryCard";

const CardContainer = () => {
  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8 bg-secondary">
      <LotteryCard />
      <LotteryCard />
      <LotteryCard />
      <LotteryCard />
      <LotteryCard />
    </div>
  );
};

export default CardContainer;
