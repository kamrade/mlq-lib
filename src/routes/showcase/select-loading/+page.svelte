<script lang="ts">
  import {Select, type ISelectGroupData, type ISelectItem, Divider, PageTitle} from '@lib';

  let { data }: {
    data: { selectData: Promise<ISelectGroupData[]> }
  } = $props();

  let value_first: (ISelectItem | null) = $state(null);

</script>

<PageTitle>Select Async</PageTitle>
<Divider/>

{#await data.selectData}
  Loading...
{:then selectData}
  <div class="mb-6">
    <Select fullWidthMenu placeholder="Enter City" options={selectData} bind:value={value_first} />
  </div>

  <Divider/>

  <div class="mb-3">
    <p>Value: {value_first ? `${value_first?.title} | ${value_first?.value}` : ''}</p>
  </div>
{:catch e}
  Error: {e}
{/await}
