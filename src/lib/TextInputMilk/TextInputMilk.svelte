<script lang="ts">
  import { TextInput, type TextInputInstance } from '@lib';
  import type { ITextInputMilkProps } from './TextInputMilk.types';
  import { smVariables, mdVariables, lgVariables } from './TextInputMilk.size-options';
  import variants from './TextInputMilk.variant-options';

  let { 
    size = 'sm',
    variant = 'contained',
    value = $bindable(),
    ...rest
  }: ITextInputMilkProps = $props();

  // Прокидываем фокус примитива
  let textInputRef: TextInputInstance;
  export const focus = () => textInputRef.focus();

</script>


<TextInput 
  bind:value
  bind:this={textInputRef}
  style={
    (size === 'sm' ? smVariables
      : size === 'md' ? mdVariables
      : size === 'lg' ? lgVariables : '') +
    (variant === 'underlined' ? variants.outlined 
      : variant === 'text' ? variants.text : '')
  }
  
  {...rest}
/>