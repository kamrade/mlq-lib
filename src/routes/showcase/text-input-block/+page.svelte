<script lang="ts">
  import { TextInputBlock } from '@lib';
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows } from 'svelte-remix';
</script>

<h2 class="text-2xl font-medium mb-4">Text Input Block</h2>

<TextInputBlock size='lg' placeholder="Text Input with snippets">
  {#snippet prefix()}
    <CheckboxCircleFillSystem size="1em"/>
  {/snippet}
  {#snippet suffix()}
    <ArrowRightSLineArrows size="1em" />
  {/snippet}
</TextInputBlock>