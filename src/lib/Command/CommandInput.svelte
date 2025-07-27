<script lang="ts">
  import { TextInputBlock, TextInputMilk } from '@lib';
  import { Search2LineSystem } from 'svelte-remix';
</script>



<TextInputBlock size='lg' placeholder="Text Input with snippets" variant="text">
  {#snippet prefix()}
    <Search2LineSystem size="1em"/>
  {/snippet}
</TextInputBlock>