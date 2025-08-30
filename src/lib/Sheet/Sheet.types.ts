import type { Snippet } from "svelte";

export interface ISheetProps {
  children: Snippet;
  isOpen: boolean;
  hide?: () => unknown;
  hideOnClickOutside?: boolean;
}

export interface ISheetHeaderProps {
  children: Snippet;
}

export interface ISheetDescriptionProps {
  children: Snippet;
}

export interface ISheetContentProps {
  children: Snippet;
}

export interface ISheetActionsProps {
  children: Snippet;
  hide?: () => unknown;
}

export interface ISheetTitleProps {
  children: Snippet;
}
