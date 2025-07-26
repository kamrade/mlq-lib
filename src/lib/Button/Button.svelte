<script lang="ts">
  import { Loader2FillSystem } from 'svelte-remix';
  import type { IButtonProps } from './Button.types';

  let buttonEl: HTMLButtonElement;

  export const focus = () => buttonEl?.focus();

  let { 
    clickHandler, 
    disabled = false, 
    type = 'button', 
    name, 
    id, 
    block, 
    loading,
    children,
    style,
    ...rest
  }: IButtonProps = $props();

</script>

<button
  bind:this={buttonEl}
  onclick={clickHandler}
  disabled={disabled || loading} {type} {name} {id} {style} {...rest}
  class="Button"
  class:block={block}
  class:loading={loading}
>
  {@render children?.()}
  <span class="loader">
    <span class="loader-wrapper">
      <Loader2FillSystem size="1em"/>
    </span>
  </span>
</button>

<style lang="scss">

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .Button {
    --paddingY: 5px;
    --paddingX: 16px;
    --backgroundColor: #444;
    --hoverBackground: #333;
    --activeBackground: #222;
    --disabledBackgroundColor: var(--backgroundColor);
    --color: #fff;
    --hoverColor: var(--color);
    --activeColor: var(--color);
    --disabledColor: var(--color);
    --fontSize: 16px;
    --lineHeight: 1.5;
    --borderRadius: 8px;
    --innerGap: 4px;
    --borderWidth: 1px;
    --borderColor: transparent;
    --hoverBorderColor: var(--borderColor);
    --activeBorderColor: var(--borderColor);
    --disabledBorderColor: var(--borderColor);
    --focusColor: var(--backgroundColor);
    --focusShadow: 0 0 0 2px var(--focusColor);
    --disabledOpacity: 0.6;
  }

  .Button {
    position: relative;
    outline: none;
    display: inline-flex;
    align-items: center;
    align-content: center;
    white-space: nowrap;
    font-family: inherit;
    text-align: center;
    justify-content: center;

    border: var(--borderWidth) solid var(--borderColor);
    padding: var(--paddingY) var(--paddingX);
    background: var(--backgroundColor);
    color: var(--color);
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    border-radius: var(--borderRadius);
    gap: var(--innerGap);

    transition: all .2s ease-in-out;
    box-sizing: border-box;

    &:not(:disabled):hover {
      background: var(--hoverBackground);
      color: var(--hoverColor);
      border-color: var(--hoverBorderColor);
    }

    &:not(:disabled):active {
      background: var(--activeBackground);
      color: var(--activeColor);
      border-color: var(--activeBorderColor);
    }

    &:not(:active):focus {
      &::after {
        content: '';
        position: absolute;
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        z-index: 0;
        opacity: .5;
        border-radius: calc(var(--borderRadius) + 1px);
        box-shadow: var(--focusShadow);
      }
    }

    &:disabled, &.loading {
      opacity: var(--disabledOpacity);
      color: var(--disabledColor);
      background-color: var(--disabledBackgroundColor);
      border-color: var(--disabledBorderColor);
    }

    &.block {
      width: 100%;
    }

    &.loading {
      .loader {
        display: flex;
      }
    }    

    .loader {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--disabledBackgroundColor);
      display: none;
      border-radius: var(--borderRadius);
      justify-content: center;
      align-items: center;

      .loader-wrapper {
        animation: spin 2.5s linear infinite;
      }
    }

  }

</style>