<script lang="ts">
  import {TextInput, ButtonMilk, type TextInputInstance, Divider, PageTitle} from '@lib';

  let textInputBlock: TextInputInstance;
  let textInputValue = $state('');
</script>

<PageTitle>Text Input Primitive Actions</PageTitle>
<Divider/>

<div class="mb-2">
  <TextInput bind:value={textInputValue} placeholder="Your text" bind:this={textInputBlock} />
  <div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>
</div>
<div class="flex gap-2">
  <ButtonMilk size='lg' onClick={() => textInputBlock.focus()}>Focus</ButtonMilk>
  <ButtonMilk variant="base-contained" size='lg' onClick={() => textInputValue = ""}>Clear</ButtonMilk>
</div>
<hr class="mt-4 mb-8 border-t border-gray-300" />
