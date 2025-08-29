import { type Snippet } from "svelte";

export interface IModalProps {
  isVisible: boolean;
  hideModal: () => unknown;
  showCloseButton?: boolean;
  hideOnEscape?: boolean;
  blackout?: boolean;
  closeOnBackdrop?: boolean;
  children: Snippet;
}
