import type { IButtonProps } from '@lib/uikit/Button/Button.types';

export type ButtonMilkSizes = 'sm' | 'md' | 'lg';
export type ButtonMilkVariants = 
  'primary-emphasis' | 'primary-outlined' | 'primary-contained' | 
  'base-contained' | 'base-outlined' | 'base-emphasis';

export interface IButtonMilkProps extends IButtonProps {
  size?: ButtonMilkSizes;
  variant?: ButtonMilkVariants;
}
