<script lang="ts">
  import { TextInput, ButtonMilk, type TextInputInstance } from '@lib';

  let textInputBlock: TextInputInstance;
  let textInputValue = $state('');
</script>

<h2 class="text-2xl font-medium mb-4">Text Input Primitive Actions</h2>

<div class="mb-2">
  <TextInput bind:value={textInputValue} placeholder="Your text" bind:this={textInputBlock} />
  <div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>
</div>
<div class="flex gap-2">
  <ButtonMilk size='lg' onClick={() => textInputBlock.focus()}>Focus</ButtonMilk>
  <ButtonMilk variant="base-contained" size='lg' onClick={() => textInputValue = ""}>Clear</ButtonMilk>
</div>
<hr class="mt-4 mb-8 border-t border-gray-300" />