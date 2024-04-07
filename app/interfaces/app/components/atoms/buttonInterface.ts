export interface IButton {
  label: string;
  variant: "primary" | "alternative" | undefined;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}
