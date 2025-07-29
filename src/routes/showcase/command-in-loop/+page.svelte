<script lang="ts">
  import { CommandRoot, CommandInput, CommandList, CommandGroup, CommandItem, TextInputMilk } from '@lib';
  import { CalendarLineBusiness, UserSmileLineUserFaces } from 'svelte-remix';
  import type { Snippet } from 'svelte';

  interface IGroupData {
    heading: string;
    content: Snippet;
  }

  const groupList = [{
    heading: 'Suggestions',
    items: [{
      title: 'Calendar'
    }, {
      title: 'Search Emoji'
    }, {
      title: 'Calculator'
    }]
  }, {
    heading: 'Settings',
    items: [{
      title: 'Profile'
    }, {
      title: 'Billing'
    }, {
      title: 'Options'
    }]
  }]

</script>

<h2 class="text-2xl font-medium mb-4">Command in loop</h2>

<div class="mb-3">
  <CommandRoot>  
    <CommandInput></CommandInput>
    
    <CommandList>
      {#each groupList as group}
        <CommandGroup heading={group.heading}>
          {#each group.items as item}
            <CommandItem>{item.title}</CommandItem>
          {/each}
        </CommandGroup>
      {/each}
    </CommandList>

  </CommandRoot>
</div>

<TextInputMilk id="new-100" placeholder="New item" size="lg"/>