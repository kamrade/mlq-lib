import type { Snippet } from 'svelte';

export interface IMenuProps {
  hideMenu: () => void;
  parentElement: HTMLElement | null;
  menuGap?: number;
  appearanceOnHover?: boolean;
  isVisible?: boolean;
  menuElement?: HTMLDivElement | null;
  maxHeight?: number;
  width?: number;
  minWidth?: number;
  children: Snippet;
  fullWidth?: boolean;
  id?: string;
}

export interface IMenuContentProps {
  children: Snippet;
}

export interface IMenuItemTitleProps {
  children: Snippet;
}

export interface IMenuItemProps {
  onClick?: () => unknown;
  children: Snippet;
}
