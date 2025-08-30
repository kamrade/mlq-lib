<script lang="ts">
  import {Divider, PageTitle, TextInput} from "@lib";

	let textInputValue = $state('');

</script>

<PageTitle>Text Input Primitive</PageTitle>
<Divider/>

<h3 class="text-lg mb-2">Bindable Text Input</h3>
<div class="mb-2">
  <TextInput bind:value={textInputValue} placeholder="Your text" autoFocus />
  <div class="py-2 text-gray-500 text-xs">Current value: {textInputValue}</div>
</div>
