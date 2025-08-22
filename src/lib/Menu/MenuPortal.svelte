<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { clickOutsideObject } from "@lib";
  import Portal from '@lib/Portal/Portal.svelte';

  export let hideMenu: () => void;
  export let parentElement: HTMLElement | null;
  export let menuGap = 0;
  export let appearanceOnHover = false;
  export let isVisible = false;
  export let menuElement: HTMLDivElement | null = null;
  export let maxHeight = 200;
  export let width = 0;
  export let minWidth = 0;
  export let contentHeight = 0;

  let x = 0;
  let y = 0;
  let height = 0;

  let innerWidth = 0;
  let innerHeight = 0;
  let scrollY = 0;

  const calculatePosition = (parentEl: HTMLElement | null) => {
    const boundingClientRect = parentEl?.getBoundingClientRect();
    x = boundingClientRect?.x || 0;
    y = boundingClientRect?.y || 0;
    height = boundingClientRect?.height || 0;
    y = y + height + menuGap + scrollY;
  };

  const mouseLeaveHandler = (e: MouseEvent) => {
    if (e.relatedTarget !== parentElement && appearanceOnHover) {
      hideMenu();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    clickOutsideObject(event, menuElement, null, () => hideMenu()); // TODO: Probably we need object as param here
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

  $: {
    if (innerWidth && innerHeight) {
      calculatePosition(parentElement);
    }
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />


{#if isVisible}
  <Portal>
    <div
      role="none"
      onmouseleave={mouseLeaveHandler}
      bind:this={menuElement}
      class="Menu"
      style={`
      left: ${x}px;
      top: ${y}px;
      width: ${width ? width + "px" : "auto"};
      min-width: ${minWidth ? minWidth + "px" : "auto"};
      max-height: ${maxHeight}px;
      height: ${contentHeight}px`}
    >
      <slot />
    </div>
  </Portal>
{/if} 


<style lang="scss">
	
	$menu-zindex: var(--zindex-dropdown);

  @use "./Menu.scss";
</style>
