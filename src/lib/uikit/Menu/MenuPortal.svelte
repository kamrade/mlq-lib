<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { clickOutsideObject } from "@lib";
  import type { IMenuProps } from "./Menu.types";
  import Portal from '@lib/uikit/Portal/Portal.svelte';

  let {
    hideMenu,
    parentElement,
    menuGap=6,
    appearanceOnHover=false,
    isVisible,
    menuElement=$bindable(),
    maxHeight=200,
    width=0,
    fullWidth,
    minWidth=320,
    id,
    children
  }: IMenuProps = $props();

  let y = $state(0);
  let x = $state(0);
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let scrollY = $state(0);

  // calculatePosition calculates differently than in Menu component
  const calculatePosition = (parentEl: HTMLElement | null) => {
    const boundingClientRect = parentEl?.getBoundingClientRect();
    x = (boundingClientRect?.x || 0);
    y = ((boundingClientRect?.y || 0) + (boundingClientRect?.height || 0)) + menuGap;
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

  $effect(() => {
    if (isVisible) {
      calculatePosition(parentElement);
    }
  });

</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />


{#if isVisible}
  <Portal>
    <div
      {id}
      role="menu"
      tabindex="0"
      onmouseleave={mouseLeaveHandler}
      bind:this={menuElement}
      class="Menu"
      style={`
        left: ${x}px;
        top: ${y}px;
        width: ${fullWidth ? '100%' : width ? width + "px" : "auto"};
        min-width: ${minWidth ? minWidth + "px" : "auto"};
        max-height: ${maxHeight}px;
      `}
    >
      {@render children()}
    </div>
  </Portal>
{/if}


<style lang="scss">
  @use "./Menu.scss";
</style>
