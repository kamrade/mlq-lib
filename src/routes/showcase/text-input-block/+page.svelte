<script lang="ts">
  import { TextInputBlock } from '@lib';
  import { CheckboxCircleFillSystem, ArrowRightSLineArrows, ArrowDownSLineArrows } from 'svelte-remix';
</script>

<h2 class="text-2xl font-medium mb-4">Text Input Block</h2>


<div class="mb-6">
  <TextInputBlock size='lg' placeholder="Text Input with snippets" variant="underlined">
    {#snippet prefix()}
      <CheckboxCircleFillSystem size="1em"/>
    {/snippet}
    {#snippet suffix()}
      <ArrowRightSLineArrows size="1em" />
    {/snippet}
  </TextInputBlock>
</div>

<div class="mb-6">
  <TextInputBlock size='lg' variant="contained" placeholder="Text Input Contained with snippets">
    {#snippet suffix()}
      <ArrowDownSLineArrows size="1em" />
    {/snippet}
  </TextInputBlock>
</div>
