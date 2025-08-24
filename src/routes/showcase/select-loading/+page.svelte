<script lang="ts">
  import { Select, type ISelectGroupData, type ISelectItem } from '@lib';

  let { data }: {
    data: { selectData: Promise<ISelectGroupData[]> }
  } = $props();

  let value_first: (ISelectItem | null) = $state(null);

</script>

{#await data.selectData}
  Loading...
{:then selectData}
  <div class="mb-6">
    <h3 class="text-2xl font-medium mb-4">Select base</h3>
    <Select fullWidthMenu placeholder="Enter City" options={selectData} bind:value={value_first} />
  </div>

  <hr class="my-8 border-0 border-t border-gray-400" />

  <div class="mb-3">
    <p>Value: {value_first ? `${value_first?.title} | ${value_first?.value}` : ''}</p>
  </div>
{:catch e}
  Error: {e}
{/await}
