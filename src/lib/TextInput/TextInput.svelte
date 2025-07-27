<script lang="ts">
  import type { ITextInputProps } from './TextInput.types';

  let {
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    onChange,
    placeholder,
    type = 'text',
    disabled = false,
    readonly = false,
    name,
    id,
    value = $bindable(),
    invalid,
    style,
    ...rest
  }: ITextInputProps = $props();

  let inputEl: HTMLInputElement;
  export const focus = () => inputEl?.focus();

</script>

<input 
  bind:this={inputEl}
  bind:value
  class={`TextInput ${invalid ? 'invalid' : ''}`}
  onfocus={onFocus}
  onblur={onBlur} 
  onkeydown={onKeyDown} 
  onkeyup={onKeyUp}
  onchange={onChange}
  {type} 
  {placeholder} 
  {disabled} 
  {readonly}
  {name}
  {id}
  {style}
  {...rest}
/>

<style lang="scss">
  
  .TextInput {
    --transition: border-color .25s ease-in-out;

    // Base size
    --paddingY: 8px;
    --paddingX: 8px;
    --fontSize: 16px;
    --lineHeight: 1.5;
    --borderRadius: 8px;

    --borderStyle: solid;
    --borderWidth: 1px;
    --borderTopWidth: var(--borderWidth);
    --borderBottomWidth: var(--borderWidth);
    --borderLeftWidth: var(--borderWidth);
    --borderRightWidth: var(--borderWidth);


    // Base colors
    --focusShadow: var(--borderColorFocus);
    --textColor: #26272B;
    --backgroundColor: #fff;
    --borderColor: #D3D5DC;
    --borderColorFocus: #151617;
    
    // Disabled
    --backgroundDisabled: var(--backgroundColor);
    --borderColorDisabled: var(--borderColor);
    --opacityDisabled: 0.6;

    --borderStyleDisabled: var(--borderStyle);
    --borderWidthDisabled: var(--borderWidth);
    --borderTopWidthDisabled: var(--borderWidthDisabled);
    --borderBottomWidthDisabled: var(--borderWidthDisabled);
    --borderLeftWidthDisabled: var(--borderWidthDisabled);
    --borderRightWidthDisabled: var(--borderWidthDisabled);

    // Readonly
    --backgroundReadonly: var(--backgroundDisabled);
    --borderColorReadonly: var(--borderColor);
    --opacityReadonly: var(--opacityDisabled);

    --borderStyleReadonly: var(--borderStyle);
    --borderWidthReadonly: var(--borderWidth);
    --borderTopWidthReadonly: var(--borderWidth);
    --borderBottomWidthReadonly: var(--borderWidth);
    --borderLeftWidthReadonly: var(--borderWidth);
    --borderRightWidthReadonly: var(--borderWidth);

    // Invalid
    --borderColorInvalid: #EA6D60;
    --backgroundInvalid: var(--backgroundDisabled);
    --borderStyleInvalid: var(--borderStyle);
    --borderWidthInvalid: var(--borderWidth);
    --borderTopWidthInvalid: var(--borderWidth);
    --borderBottomWidthInvalid: var(--borderWidth);
    --borderLeftWidthInvalid: var(--borderWidth);
    --borderRightWidthInvalid: var(--borderWidth);
  }

  .TextInput {
    background: var(--backgroundColor);
    border-radius: var(--borderRadius);
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    padding: var(--paddingY) var(--paddingX);
    width: 100%;
    position: relative;
    border: var(--borderWidth) var(--borderStyle) var(--borderColor);
    border-top-width: var(--borderTopWidth);
    border-bottom-width: var(--borderBottomWidth);
    border-right-width: var(--borderRightWidth);
    border-left-width: var(--borderLeftWidth);
    transition: var(--transition);

    &:focus {
      border-color: var(--borderColorFocus);
      outline: none;
      box-shadow: none;
      &:read-only {
        border-color: var(--borderColorFocus);
      }
    }

    &::placeholder {
      color:#9C9EA3;
    }

    &:disabled {
      background: var(--backgroundDisabled);
      opacity: var(--opacityDisabled);
      border: var(--borderWidthDisabled) var(--borderStyleDisabled) var(--borderColorDisabled);
      border-top-width: var(--borderTopWidthDisabled);
      border-bottom-width: var(--borderBottomWidthDisabled);
      border-right-width: var(--borderRightWidthDisabled);
      border-left-width: var(--borderLeftWidthDisabled);
    }

    &:read-only {
      background: var(--backgroundReadonly);
      opacity: var(--opacityReadonly);
      border: var(--borderWidthReadonly) var(--borderStyleReadonly) var(--borderColorReadonly);
      border-top-width: var(--borderTopWidthReadonly);
      border-bottom-width: var(--borderBottomWidthReadonly);
      border-right-width: var(--borderRightWidthReadonly);
      border-left-width: var(--borderLeftWidthReadonly);
    }

    &.invalid {
      border-color: var(--borderColorInvalid);
      border: var(--borderWidthInvalid) var(--borderStyleInvalid) var(--borderColorInvalid);
      border-top-width: var(--borderTopWidthInvalid);
      border-bottom-width: var(--borderBottomWidthInvalid);
      border-right-width: var(--borderRightWidthInvalid);
      border-left-width: var(--borderLeftWidthInvalid);
    }
  }

</style>