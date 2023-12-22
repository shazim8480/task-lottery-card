import React, { useState } from "react";
import LotteryCard from "./LotteryCard";
import Button from "../UI/Button";

let lotteryData = [
  { id: "123.321", value: "123.321" },
  { id: "140.324", value: "140.324" },
  { id: "042.234", value: "042.234" },
  { id: "031.050", value: "031.050" },
  { id: "186.589", value: "186.589" },
  { id: "025.570", value: "025.570" },
];
let filterTags = [
  { id: "Lige", value: "Lige" },
  { id: "Ulige", value: "Ulige" },
  { id: "Ender med 5", value: "Ender med 5" },
  { id: "Ender med 0", value: "Ender med 0" },
];

const CardContainer = () => {
  const [filteredItems, setFilteredItems] = useState(lotteryData);

  const handleFilterLotteryCards = (tagID) => {
    let filtered;
    switch (tagID) {
      case "Lige":
        filtered = lotteryData.filter(
          (item) => item.id === "123.321" || item.id === "031.050"
        );
        break;
      case "Ulige":
        filtered = lotteryData.filter((item) => item.id === "140.324");
        break;
      case "Ender med 5":
        filtered = lotteryData.filter((item) => item.id === "025.570");
        break;
      case "Ender med 0":
        filtered = lotteryData.filter((item) => item.id === "186.589");
        break;
      default:
        filtered = lotteryData;
        break;
    }
    setFilteredItems(filtered);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* filter buttons */}
      <div className="flex items-center justify-center mb-10">
        {filterTags.map((tag) => {
          return (
            <Button
              onClick={() => handleFilterLotteryCards(tag.id)}
              className={"mr-4 shadow-sm rounded-md"}
              variant="tag"
            >
              {tag.value}
            </Button>
          );
        })}
        <Button onClick={() => handleFilterLotteryCards()} variant="secondary">
          Clear
        </Button>
      </div>
      {/* lottery cards */}
      <div className="grid grid-cols-2 gap-8 px-12 justify-items-center md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 ">
        {filteredItems?.map((item) => {
          return <LotteryCard key={item.id} item={item} />;
        })}
      </div>

      <Button className={"my-12 px-32 rounded-md"} variant="outlined">
        Find andre lodnumre
      </Button>
    </div>
  );
};

export default CardContainer;
