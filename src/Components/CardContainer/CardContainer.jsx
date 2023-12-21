import React from "react";
import LotteryCard from "./LotteryCard";
import Button from "../UI/Button";

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
    <div className="flex flex-col justify-center items-center">
      <div className="px-12 grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-8 ">
        {lotteryData?.map((item) => {
          return <LotteryCard item={item} />;
        })}
      </div>

      <Button className={"my-12 px-32 rounded-md"} variant="outlined">
        Find andre lodnumre
      </Button>
    </div>
  );
};

export default CardContainer;
