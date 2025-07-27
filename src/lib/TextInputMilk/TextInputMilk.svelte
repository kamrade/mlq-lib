<script lang="ts">
  import { TextInput, type TextInputInstance } from '@lib';
  import type { ITextInputMilkProps } from './TextInputMilk.types';

  let { 
    size = 'sm',
    variant = 'contained',
    value = $bindable(),
    ...rest
  }: ITextInputMilkProps = $props();

  $effect(() => console.log(variant));

  // Прокидываем фокус примитива
  let textInputRef: TextInputInstance;
  export const focus = () => textInputRef.focus();

  let sizeClassName = 
    size === "sm" ? "TextInput-sm" 
    : size === "md" ? "TextInput-md" 
    : size === "lg" ? "TextInput-lg" 
    : "";

  let variantClassname = 
    variant === "text" ? "TextInput-text"
    : variant === "underlined" ? "TextInput-underlined"
    : variant === "contained" ? "TextInput-contained" : ""

  let classNames = `${sizeClassName} ${variantClassname}`;

</script>


<TextInput 
  bind:value
  bind:this={textInputRef}
  {classNames}
  {...rest}
/>

<style lang="scss">

  :global(.TextInput.TextInput-sm) {
    --padding-y: 2px;
    --padding-x: 4px;
    --font-size: 12px;
    --line-height: 14px;
    --border-radius: 6px;
  }

  :global(.TextInput.TextInput-md) {
    --padding-y: 5px;
    --padding-x: 6px;
    --font-size: 14px;
    --line-height: 20px;
    --border-radius: 8px;
  }

  :global(.TextInput.TextInput-lg) {
    --padding-y: 7px;
    --padding-x: 12px;
    --font-size: 16px;
    --line-height: 24px;
    --border-radius: 8px;
  }

  :global(.TextInput.TextInput-text) {
    --padding-x: 0px;
    --border-radius: 0;
    --border-width: 0px;
    --background-color: transparent;
    --border-color: transparent;
    --border-color-focus: transparent;  
  }
  :global(.TextInput.TextInput-underlined) {
    --padding-x: 0px;

    --border-radius: 0;
    --border-style: solid;
    --border-width: 1px;
    --border-top-width: 0px;
    --border-bottom-width: var(--border-width);
    --border-left-width: 0px;
    --border-right-width: 0px;

    --background-color: #fff;
    --border-color: #D3D5DC;
    --border-color-focus: #151617;

    --background-disabled: var(--background-color);
    --border-color-disabled: var(--border-color);
    --opacity-disabled: 0.6;

    --border-style-disabled: dashed;
    --border-width-disabled: var(--border-width);
    --border-top-width-disabled: 0px;
    --border-bottom-width-disabled: var(--border-width-disabled);
    --border-left-width-disabled: 0px;
    --border-right-width-disabled: 0px;

    --background-readonly: var(--background-disabled);
    --border-color-readonly: var(--border-color);
    --opacity-readonly: var(--opacity-disabled);

    --border-style-readonly: dashed;
    --border-width-readonly: var(--border-width);
    --border-top-width-readonly: 0px;
    --border-bottom-width-readonly: var(--border-width);
    --border-left-width-readonly: 0px;
    --border-right-width-readonly: 0px;

    --border-color-invalid: #EA6D60;
    --background-invalid: var(--background-color);
    --border-style-invalid: var(--border-style);
    --border-width-invalid: var(--border-width);
    --border-top-width-invalid: 0px;
    --border-bottom-width-invalid: var(--border-width);
    --border-left-width-invalid: 0px;
    --border-right-width-invalid: 0px;
  }
  :global(.TextInput.TextInput-contained) {
    // Default
  }
</style>