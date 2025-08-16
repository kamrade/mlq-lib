import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from "svelte/elements";

export type TextInputType = "text" | "password";

export type TextInputInstance = {
  focus: () => void;
};

export interface ITextInputProps {
  value?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: TextInputType;
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  id?: string;
  invalid?: boolean;
  style?: string;
  classNames?: string;
  autoFocus?: boolean;
}