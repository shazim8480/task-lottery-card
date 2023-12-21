import React from "react";
import cn from "../../lib/utils";

const Typography = ({ children, variant = "body" }) => {
  return variant === "header" ? (
    <h2 class={cn("text-center text-4xl italic font-black text-dark")}>
      {children}
    </h2>
  ) : (
    <p class={cn("text-dark font-normal text-md")}>{children}</p>
  );
};

export default Typography;
