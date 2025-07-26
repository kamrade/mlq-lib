<script lang="ts">
  import Label from "@lib/Label/Label.svelte";
  import TextInput from "@lib/TextInput/TextInput.svelte";
</script>

<Label forValue="test-input">Test label</Label>
<TextInput id="test-input" />
<p class="text-gray-500 text-sm m-0 pt-1">Small message under the text input</p>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<Label>
  <p class="mb-1">Test label</p>
  <TextInput id="input-inside-of-the-label" />
</Label>