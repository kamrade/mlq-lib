import type { ITextInputMilkProps } from '@lib';
import type { Snippet } from 'svelte';

export interface ITextInputBlockProps extends ITextInputMilkProps {
  prefix?: Snippet;
  suffix?: Snippet;
  clearValue?: boolean;
  onClear?: () => void;
  pseudoFocus?: boolean;
}
