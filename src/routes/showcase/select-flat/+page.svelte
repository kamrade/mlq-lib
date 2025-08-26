<script lang="ts">
  import { Select, type ISelectItem } from '@lib';

  let { data }: {
    data: { selectData: ISelectItem[], selectDataMin: ISelectItem[] }
  } = $props();

  let value = $state<ISelectItem>(data?.selectData[0] || null);
  let value_single = $state<ISelectItem | null>(null);

</script>

<h3 class="text-2xl font-medium mb-4">Select base</h3>

<div class="mb-6">
  <Select fullWidthMenu placeholder="Enter Country" options={data.selectData} bind:value={value} />
</div>

<div class="mb-3">
  <p>Value First: {value ? `${value?.title} | ${value?.value}` : ''}</p>
</div>

<div class="mb-6">
  <Select searchable={false} placeholder="Enter Country" options={data.selectDataMin} bind:value={value_single} />
</div>
