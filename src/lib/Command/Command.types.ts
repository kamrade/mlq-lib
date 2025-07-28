import type { Snippet } from 'svelte';

export interface ICommandRootProps {
  classNames?: string;
  children: Snippet;
}

export interface ICommandListProps {
  children: Snippet;
}

export interface ICommandGroupProps {
  heading?: string;
  children: Snippet;
}

export interface ICommandItemProps {
  disabled?: boolean;
  children: Snippet;
}