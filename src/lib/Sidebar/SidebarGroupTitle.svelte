<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<li class="text-sm text-gray-900 font-medium mt-6">{@render children()}</li>
