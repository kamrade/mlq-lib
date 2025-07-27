<script lang="ts">
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows } from 'svelte-remix';
  import { Button, type ButtonInstance } from '@lib';

  /** @type {import('./Button.svelte').default} */
  let buttonRef: ButtonInstance;
</script>

<h2 class="text-2xl font-medium mb-4">Button Primitives</h2>

<div class="mb-2 flex gap-2 flex-wrap">
  <Button loading={true}><CheckboxCircleFillSystem size="1em"/>Loading Button</Button>
  <Button disabled={true}><CheckboxCircleFillSystem size="1em"/>Disabled button</Button>
  <Button onClick={() => buttonRef.focus()}><CheckboxCircleFillSystem size="1em"/>Focus the next button<ArrowRightSLineArrows size="1em"/></Button>
  <Button bind:this={buttonRef}>Focus it</Button>
</div>

