<script lang="ts">
  import type { Snippet } from "svelte";
  let { children, link }: { children: Snippet; link: string } = $props();
</script>

<li>
  <a href={link} class="text-sm text-gray-500 hover:underline">
    {@render children()}
  </a>
</li>
