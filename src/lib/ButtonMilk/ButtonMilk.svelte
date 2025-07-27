<script lang="ts">
  import { Button, type ButtonInstance } from '@lib';
  import type { IButtonMilkProps } from './ButtonMilk.types';

  const { 
    size = 'sm',
    variant = 'primary-emphasis',
    children,
    ...rest
  }: IButtonMilkProps = $props();

  // Прокидываем фокус примитива
  let buttonRef: ButtonInstance;
  export const focus = () => buttonRef.focus();

  let sizeClassName = 
    size === "sm" ? "Button-sm" 
    : size === "md" ? "Button-md" 
    : size === "lg" ? "Button-lg" 
    : "";

  let variantClassname = 
    variant === "primary-emphasis" ? "Button-primary-emphasis" 
    : variant === "primary-outlined" ? "Button-primary-outlined"
    : variant === "primary-contained" ? "Button-primary-contained"
    : variant === "base-contained" ? "Button-base-contained"
    : variant === "base-outlined" ? "Button-base-outlined"
    : variant === "base-emphasis" ? "Button-base-emphasis" : ""

  let classNames = `${sizeClassName} ${variantClassname}`;

</script>

<Button
  bind:this={buttonRef}
  {classNames}
  {...rest}
>
  {@render children?.()}
</Button>

<style lang="scss">
  :global(.Button.Button-base-emphasis) {
    --background-color: var(--color-gray-700);
    --hover-background: var(--color-gray-800);
    --active-background: var(--color-gray-900);
    --color: white
  }

  :global(.Button.Button-base-outlined) {
    --background-color: transparent;
    --hover-background: var(--color-gray-300);
    --active-background: var(--color-gray-400);
    --color: var(--color-gray-900);
    --border-color: var(--color-gray-400);
    --focus-color: var(--color-gray-600);
  }

  :global(.Button.Button-base-contained) {
    --background-color: var(--color-gray-200);
    --hover-background: var(--color-gray-300);
    --active-background: var(--color-gray-400);
    --color: var(--color-gray-900);
    --focus-color: var(--color-gray-600);
  }

  :global(.Button.Button-primary-contained) {
    --background-color: var(--color-yellow-100);
    --hover-background: var(--color-yellow-200);
    --active-background: var(--color-yellow-300);
    --color: #26272B;
  }

  :global(.Button.Button-primary-outlined) {
    --background-color: transparent;
    --hover-background: var(--color-yellow-300);
    --active-background: var(--color-yellow-400);
    --color: var(--color-gray-900);
    --border-color: var(--color-yellow-500);
  }

  :global(.Button.Button-primary-emphasis) {
    --background-color: var(--color-yellow-700);
    --hover-background: var(--color-yellow-800);
    --active-background: var(--color-yellow-900);
    --color: var(--color-gray-900);
  }

  :global(.Button.Button-lg) {
    --padding-y: 7px; 
    --padding-x: 20px; 
    --font-size: 16px; 
    --line-height: 24px; 
    --border-radius: 8px; 
    --inner-gap: 6px;
  }
  :global(.Button.Button-md) {
    --padding-y: 5px; 
    --padding-x: 16px; 
    --font-size: 14px; 
    --line-height: 20px; 
    --border-radius: 8px; 
    --inner-gap: 5px;
  }
  :global(.Button.Button-sm) {
    --padding-y: 2px; 
    --padding-x: 10px; 
    --font-size: 12px; 
    --line-height: 14px; 
    --border-radius: 6px; 
    --inner-gap: 3px;
  }
</style>
