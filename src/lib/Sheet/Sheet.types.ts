import type { Snippet } from "svelte";

export interface ISheetProps {
  children: Snippet;
  isOpen: boolean;
}

export interface ISheetHeaderProps {
  children: Snippet;
}

export interface ISheetActionsProps {
  children: Snippet;
}
