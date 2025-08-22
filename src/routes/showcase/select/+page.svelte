<script lang="ts">
  import { Select, type IGroupData, type ISelectItem } from '@lib';

  const groupList: IGroupData[] = [{
    heading: 'United Kingdom',
    items: [{
      title: 'London',
      value: 'LND'
    }, {
      title: 'Birmingham',
      value: 'BMG'
    }, {
      title: 'Liverpool',
      value: 'LVP'
    }]
  }, {
    heading: 'France',
    items: [{
      title: 'Paris',
      value: 'PRS'
    }, {
      title: 'Marcelle',
      value: 'MRC'
    }, {
      title: 'Lion',
      value: 'LLN'
    }]
  }]

  let value: (ISelectItem) = $state({
    title: 'London',
    value: 'LND'
  });

</script>

<div class="mb-3">
  <Select options={groupList} bind:value={value} />
</div>
<p>Value: {value.title} | {value.value}</p>
