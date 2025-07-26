<script lang="ts">
  import { TextInput } from '@lib';
  import type { ITextInputMilkProps } from './TextInputMilk.types';
  import { smVariables, mdVariables, lgVariables } from './TextInputMilk.size-options';
  import variants from './TextInputMilk.variant-options';

  const { 
    size = 'sm',
    variant = 'contained',
    ...rest
  }: ITextInputMilkProps = $props();

</script>


<TextInput 
  
  style={
    (size === 'sm' ? smVariables
    : size === 'md' ? mdVariables
    : size === 'lg' ? lgVariables : '') +
    (variant === 'underlined' ? variants.outlined : '')
  }
  
  {...rest}
/>