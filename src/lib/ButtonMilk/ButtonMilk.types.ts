import type { IButtonProps } from '@lib/Button/Button.types';

export type MilkButtonSizes = 'sm' | 'md' | 'lg';
export type MilkButtonVariants = 
  'primary-emphasis' | 'primary-outlined' | 'primary-contained' | 
  'base-contained' | 'base-outlined' | 'base-emphasis';

export interface IMilkButtonProps extends IButtonProps {
  size?: MilkButtonSizes;
  variant?: MilkButtonVariants;
}