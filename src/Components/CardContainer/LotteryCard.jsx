import React from "react";

// icon
import Button from "../UI/Button";
import Typography from "../UI/Typography";

const LotteryCard = ({ item }) => {
  return (
    <div className="">
      <div className="h-[300px] md:h-[280px] lg:h-[230px] xl:h-[230px] bg-light text-center shadow-sm flex flex-col justify-center items-center border-dashed border-b-[0.7px] border-primary">
        {/* shadow with text */}
        <div className="relative h-[50px] bg-[#d2e5c5] w-[50px] rounded-full border-[0.3px] border-dark">
          <div className="bg-[#589428] h-[40px] w-[40px] left-[5px] top-[4.5px] rounded-full shadow-xl absolute inset-0">
            <Typography
              variant="header"
              className={"italic font-extrabold font-sans text-[28px] pr-[2px]"}
            >
              V
            </Typography>
          </div>
        </div>
        {/* numbered text */}
        <Typography className={"pt-4 text-3xl"} variant="header">
          {item}
        </Typography>
      </div>
      {/* button - secondary */}
      <Button
        className={"font-extrabold w-full shadow-sm italic"}
        variant="secondary"
      >
        med Xtra Chancen
      </Button>
      {/* button - primary */}
      <Button className={"font-normal w-full shadow-sm mt-2"} variant="primary">
        Keb lodseddel
      </Button>
    </div>
  );
};

export default LotteryCard;
