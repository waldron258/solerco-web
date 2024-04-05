export interface IButton {
  label: string;
  variant: "primary" | "alternative" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
