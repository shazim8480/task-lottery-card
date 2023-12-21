import React from "react";
import cn from "../../lib/utils";

const Button = ({ children, variant = "primary" }) => {
  return (
    <button
      class={cn("rounded-sm  px-5 py-2 text-sm font-medium shadow-sm", {
        "bg-primary text-light": variant === "primary",
        "bg-secondary text-primary": variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
