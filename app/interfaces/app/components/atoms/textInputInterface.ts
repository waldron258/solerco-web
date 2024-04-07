import { HTMLInputTypeAttribute } from "react";

export interface ITextInput {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute | undefined;
  label?: string;
  placeholder?: string;
  className?: string;
}
