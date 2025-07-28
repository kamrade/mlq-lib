<script lang="ts">
  import { CommandRoot, CommandInput, CommandList, CommandGroup, CommandItem, TextInputMilk, TextInputBlock } from '@lib';
  import { CalendarLineBusiness, UserSmileLineUserFaces } from 'svelte-remix';
  import type { Snippet } from 'svelte';

  interface IGroupData {
    heading: string;
    content: Snippet;
  }

</script>

<h2 class="text-2xl font-medium mb-4">Command</h2>

<CommandRoot>
  
  <CommandInput></CommandInput>
  
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <CalendarLineBusiness size="1em"/>
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <UserSmileLineUserFaces size="1em" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem disabled>Calculator</CommandItem>
    </CommandGroup>
    
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>

</CommandRoot>