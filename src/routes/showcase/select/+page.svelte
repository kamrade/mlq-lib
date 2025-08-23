<script lang="ts">
  import { Select, type ISelectGroupData, type ISelectItem } from '@lib';

  let { data }: {
    data: { selectData: ISelectGroupData[] }
  } = $props();

  let value_first: (ISelectItem) = $state(data.selectData[0].items[0]);
  let value_second: (ISelectItem) = $state(data.selectData[0].items[0]);

</script>

<div class="mb-3">
  <Select placeholder="Enter City" options={data.selectData} bind:value={value_first} />
</div>

<div class="mb-3">
  <Select disabled options={data.selectData} bind:value={value_second} />
</div>

<div class="mb-3">
  <p>Value First: {value_first.title} | {value_first.value}</p>
  <p>Value Second: {value_second.title} | {value_second.value}</p>
</div>
