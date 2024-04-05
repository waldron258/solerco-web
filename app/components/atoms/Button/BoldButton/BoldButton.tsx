import { IButton } from "@/app/interfaces/app/components/atoms/buttonInterface";
import { BOLD_BUTTON_VARIANTS } from "@/app/lib/constants";
import React from "react";

export default function BoldButton(props: IButton) {
  const { label, variant, onClick, disabled } = props;
  return (
    <button
      className={`${
        BOLD_BUTTON_VARIANTS[variant as keyof typeof BOLD_BUTTON_VARIANTS]
      } rounded-3xl px-6 py-1 font-phetsarath font-bold text-lg w-auto transition-all duration-300 ease-in-out`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
