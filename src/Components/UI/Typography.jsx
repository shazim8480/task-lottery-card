import React from "react";
import cn from "../../lib/utils";

const Typography = ({ children, variant = "body", className }) => {
  return variant === "header" ? (
    <h2
      className={cn(
        "text-center text-4xl italic font-black text-dark",
        className
      )}
    >
      {children}
    </h2>
  ) : (
    <p className={cn("text-dark font-normal text-md", className)}>{children}</p>
  );
};

export default Typography;
