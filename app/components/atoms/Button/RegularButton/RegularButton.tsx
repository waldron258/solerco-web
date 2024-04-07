import { IButton } from "@/app/interfaces/app/components/atoms/buttonInterface";
import { REGULAR_BUTTON_VARIANTS } from "@/app/lib/constants";

export default function RegularButton(props: IButton) {
  const { label, variant, type, onClick, disabled, className } = props;

  return (
    <button
      className={`${className ? className : ""} ${
        REGULAR_BUTTON_VARIANTS[variant as keyof typeof REGULAR_BUTTON_VARIANTS]
      } bg-transparent rounded-3xl px-6 py-2 font-phetsarath font-bold text-lg w-auto transition-all duration-300 ease-in-out`}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
