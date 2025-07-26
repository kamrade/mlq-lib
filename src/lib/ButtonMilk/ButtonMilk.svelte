<script lang="ts">
  import { Button } from '@lib';
  import type { IMilkButtonProps } from './ButtonMilk.types';
  import { smVariables, mdVariables, lgVariables } from './ButtonMilk.size-options';
  import variables from './ButtonMilk.variant-options';

  const { 
    size = 'sm',
    variant = 'primary-emphasis',
    children,
    ...rest
  }: IMilkButtonProps = $props();

</script>

<Button
  style={
    (size === 'sm' ? smVariables 
      : size === 'md' ? mdVariables 
      : size === 'lg' ? lgVariables :  '') +
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

