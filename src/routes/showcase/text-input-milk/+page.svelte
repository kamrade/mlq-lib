<script lang="ts">
  import { TextInputMilk } from '@lib';
</script>

<div class="mb-4">
  <TextInputMilk size="sm" placeholder="Small Text Input" />
</div>
<hr class="mt-4 mb-8 border-t border-gray-300" />
<div class="mb-4">
  <TextInputMilk size="md" placeholder="Medium Text Input" />
</div>
<hr class="mt-4 mb-8 border-t border-gray-300" />
<div class="mb-4">
  <TextInputMilk size="lg" placeholder="Large Text Input" />
</div>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<div class="mb-4">
  <TextInputMilk invalid variant="underlined" size="lg" placeholder="Large Underlined Invalid Text Input" />
</div>

<div class="mb-4">
  <TextInputMilk disabled variant="underlined" size="lg" placeholder="Large Underlined Disabled Text Input" />
</div>

<div class="mb-4">
  <TextInputMilk readonly variant="underlined" size="lg" placeholder="Large Underlined Readonly Text Input" />
</div>