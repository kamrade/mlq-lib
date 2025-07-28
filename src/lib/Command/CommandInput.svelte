<script lang="ts">
  import { TextInputBlock } from '@lib';
  import { Search2LineSystem } from 'svelte-remix';
</script>


<div class="CommandInput">  
  <TextInputBlock size='lg' placeholder="Text Input with snippets" variant="text" >
    {#snippet prefix()}
      <Search2LineSystem size="1em"/>
    {/snippet}
  </TextInputBlock>
</div>


<style lang="scss">
  .CommandInput {
    --border-color: var(--color-gray-300);
  }

  .CommandInput {
    border-bottom: 1px solid var(--border-color);
  }
</style>