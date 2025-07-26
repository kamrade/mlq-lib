import type { Snippet } from 'svelte';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonInstance = {
  focus: () => void;
};

export interface IButtonProps {
  focus?: () => void;
  clickHandler?: (e: MouseEvent) => void;
  disabled?: boolean;
  type?: ButtonType;
  name?: string;
  id?: string;
  block?: boolean;
  loading?: boolean;
  style?: string;
  children: Snippet;
}