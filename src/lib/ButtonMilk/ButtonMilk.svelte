<script lang="ts">
  import { Button, type ButtonInstance } from '@lib';
  import type { IButtonMilkProps } from './ButtonMilk.types';
  import sizes from './ButtonMilk.size-options';
  import variables from './ButtonMilk.variant-options';

  const { 
    size = 'sm',
    variant = 'primary-emphasis',
    children,
    ...rest
  }: IButtonMilkProps = $props();

  // Прокидываем фокус примитива
  let buttonRef: ButtonInstance;
  export const focus = () => buttonRef.focus();

</script>

<Button
  bind:this={buttonRef}
  style={
    (size === 'sm' ? sizes.smVariables 
      : size === 'md' ? sizes.mdVariables 
      : size === 'lg' ? sizes.lgVariables :  '') +
    (variant === 'primary-emphasis' ? variables.primaryEmphasisVariables 
      : variant === 'primary-outlined' ? variables.primaryOutlinedVariables 
      : variant === 'primary-contained' ? variables.primaryContainedVariables 
      : variant === 'base-contained' ? variables.baseContainedVariables 
      : variant === 'base-outlined' ? variables.baseOutlinedVariables 
      : variant === 'base-emphasis' ? variables.baseEmphasisVariables : '')
  }
  {...rest}
>
  {@render children?.()}
</Button>

