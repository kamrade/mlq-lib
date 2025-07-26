<script lang="ts">
  import { CheckboxCircleFillSystem} from 'svelte-remix';
  import { MilkButton } from '@lib';
</script>

<h2 class="text-2xl font-medium mb-4">Button Component</h2>

<div class="mb-3 flex gap-2 items-start">
  <MilkButton variant="base-emphasis" size="sm"><CheckboxCircleFillSystem size="1em"/>Small button</MilkButton>
  <MilkButton variant="base-emphasis" size="md"><CheckboxCircleFillSystem size="1em"/>Md button</MilkButton>
  <MilkButton variant="base-emphasis" size="lg"><CheckboxCircleFillSystem size="1em"/>Large button</MilkButton>
</div>

<div class="mb-3 flex gap-2 items-start">
  <MilkButton variant="primary-emphasis" size="lg"><CheckboxCircleFillSystem size="1em"/>Primary emphasis milk button</MilkButton>
  <MilkButton variant="primary-outlined" size="lg"><CheckboxCircleFillSystem size="1em"/>Primary outlined milk button</MilkButton>
  <MilkButton variant="primary-contained" size="lg"><CheckboxCircleFillSystem size="1em"/>Primary contained milk button</MilkButton>
</div>

<div class="mb-3 flex gap-2 items-start">
  <MilkButton variant="base-contained" size="lg"><CheckboxCircleFillSystem size="1em"/>Base contained milk button</MilkButton>
  <MilkButton variant="base-outlined" size="lg">Base outlined milk button</MilkButton>
  <MilkButton variant="base-emphasis" size="lg">Base emphasis milk button</MilkButton>
</div>
