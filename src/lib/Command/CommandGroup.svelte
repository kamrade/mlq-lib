<script lang="ts">
  import type { ICommandGroupProps } from './Command.types';

  let { heading, children } : ICommandGroupProps = $props();
</script>

<div class="CommandGroup">
  <div class="CommandGroup-heading">{heading}</div>
  {@render children()}
</div>

<style lang="scss">
  
  .CommandGroup {
    padding: var(--group-padding-y) var(--group-padding-x);
    margin-top: .25em;
    border-bottom: 1px solid var(--border-color);

    &:last-of-type {
      border-bottom: none;
      padding: 0 var(--group-padding-x);
    }
  }

  .CommandGroup .CommandGroup-heading {
    padding: var(--padding-y) var(--padding-x);
    color: var(--group-heading-color);
    font-size: 0.875em;
  }

</style>
