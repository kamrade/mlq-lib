<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { clickOutsideObject } from "@lib";
  import type { IMenuProps } from "./Menu.types";

  let {
    hideMenu,
    parentElement,
    menuGap = 4,
    appearanceOnHover = false,
    isVisible = false,
    menuElement = $bindable(),
    maxHeight = 200,
    width = 0,
    minWidth = 0,
    contentHeight = 0,
    children
  }: IMenuProps = $props();

  let y = $state(0);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let scrollY = $state(0);

  const calculatePosition = (parentEl: HTMLElement | null) => {
    const boundingClientRect = parentEl?.getBoundingClientRect();
    y = (boundingClientRect?.height || 0) + menuGap;
  };

  const mouseLeaveHandler = (e: MouseEvent) => {
    if ((e.relatedTarget !== parentElement) && appearanceOnHover) {
      hideMenu();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    clickOutsideObject(event, menuElement as HTMLElement, null, () => hideMenu());
  };

  onMount(() => {
    if (!appearanceOnHover && browser) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    calculatePosition(parentElement);
  });

  onDestroy(() => {
    if (!appearanceOnHover && browser) {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  $effect(() => {
    if (innerWidth && innerHeight) {
      calculatePosition(parentElement);
    }
  });

</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

{#if isVisible}
  <div
    role="menu"
    tabindex="0"
    onmouseleave={mouseLeaveHandler}
    bind:this={menuElement}
    class={`Menu`}
    style={`
    top: ${y}px;
    width: ${width ? width + "px" : "auto"};
    min-width: ${minWidth ? minWidth + "px" : "auto"};
    max-height: ${maxHeight}px;
    height: ${contentHeight}px`}
  >
    {@render children()}
  </div>
{/if} 


<style lang="scss">
  .Menu {
    position: absolute;
    z-index: var(--zindex-dropdown);
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: space-between;
    cursor: default;
  }
</style>
