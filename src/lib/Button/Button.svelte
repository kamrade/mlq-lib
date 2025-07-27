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
    --padding-y: 5px;
    --padding-x: 16px;
    --background-color: var(--color-gray-700);
    --hover-background: var(--color-gray-800);
    --active-background: var(--color-gray-900);
    --disabled-background-color: var(--background-color);
    --color: #fff;
    --hover-color: var(--color);
    --active-color: var(--color);
    --disabled-color: var(--color);
    --font-size: 16px;
    --line-height: 1.5;
    --border-radius: 8px;
    --inner-gap: 4px;
    --border-width: 1px;
    --border-color: transparent;
    --hoverBorder-color: var(--border-color);
    --active-border-color: var(--border-color);
    --disabled-border-color: var(--border-color);
    --focus-color: var(--background-color);
    --focus-shadow: 0 0 0 2px var(--focus-color);
    --disabled-opacity: 0.6;
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

    border: var(--border-width) solid var(--border-color);
    padding: var(--padding-y) var(--padding-x);
    background: var(--background-color);
    color: var(--color);
    font-size: var(--font-size);
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    gap: var(--inner-gap);

    transition: all .2s ease-in-out;
    box-sizing: border-box;

    &:not(:disabled):hover {
      background: var(--hover-background);
      color: var(--hover-color);
      border-color: var(--hover-border-color);
    }

    &:not(:disabled):active {
      background: var(--active-background);
      color: var(--active-color);
      border-color: var(--active-border-color);
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
        border-radius: calc(var(--border-radius) + 1px);
        box-shadow: var(--focus-shadow);
      }
    }

    &:disabled, &.loading {
      opacity: var(--disabled-opacity);
      color: var(--disabled-color);
      background-color: var(--disabled-background-color);
      border-color: var(--disabled-border-color);
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
      background-color: var(--disabled-background-color);
      display: none;
      border-radius: var(--border-radius);
      justify-content: center;
      align-items: center;

      .loader-wrapper {
        animation: spin 2.5s linear infinite;
      }
    }

  }

</style>