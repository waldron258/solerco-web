import { IButton } from "@/app/interfaces/app/components/atoms/buttonInterface";
import { REGULAR_BUTTON_VARIANTS } from "@/app/lib/constants";

export default function RegularButton(props: IButton) {
  const { label, variant, onClick, disabled } = props;
  return (
    <button
      className={`${
        REGULAR_BUTTON_VARIANTS[variant as keyof typeof REGULAR_BUTTON_VARIANTS]
      } bg-transparent rounded-3xl px-6 py-1 font-phetsarathb font-bold text-lg w-auto transition-all duration-300 ease-in-out`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
