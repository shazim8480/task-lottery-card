import React from "react";
import cn from "../../lib/utils";

const Button = ({ children, variant = "primary", className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-sm  px-5 py-2 text-sm font-medium shadow-sm",
        {
          "bg-primary text-light": variant === "primary",
          "bg-secondary text-primary": variant === "secondary",
          "bg-body text-dark font-bold border-2 border-[#778872]":
            variant === "outlined",
          "text-[#263d3d] bg-[#e5eeef]": variant === "tag",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
