<script lang="ts">
  import { Select, type ISelectGroupData, type ISelectItem } from '@lib';

  let { data }: {
    data: { selectData: ISelectGroupData[] }
  } = $props();

  let value_first: (ISelectItem) = $state(data?.selectData[0]?.items[0] || null);
  let value_second: (ISelectItem | null) = $state(null);
  let value_third: (ISelectItem) = $state(data?.selectData[0]?.items[0] || null);

</script>

<div class="mb-6">
  <h3 class="text-2xl font-medium mb-4">Select base</h3>
  <Select searchable={false} fullWidthMenu placeholder="Enter City" options={data.selectData} bind:value={value_first} />
</div>

<div class="mb-6">
  <h3 class="text-2xl font-medium mb-4">Select with dropdown with scroll</h3>
  <Select menuMaxHeight={200} fullWidthMenu placeholder="Enter City" options={data.selectData} bind:value={value_second} />
</div>

<div class="mb-6">
  <h3 class="text-2xl font-medium mb-4">Disabled Select</h3>
  <Select disabled options={data.selectData} bind:value={value_third} />
</div>

<hr class="my-8 border-0 border-t border-gray-400" />

<div class="mb-3">
  <p>Value First: {value_first ? `${value_first?.title} | ${value_first?.value}` : ''}</p>
  <p>Value Second: {value_second ? `${value_second?.title} | ${value_second?.value}` : ''}</p>
</div>
