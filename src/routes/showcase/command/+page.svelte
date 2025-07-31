<script lang="ts">
  import { CommandRoot, CommandInput, CommandList, CommandGroup, CommandItem, TextInputMilk } from '@lib';
  import { CalendarLineBusiness, UserSmileLineUserFaces } from 'svelte-remix';
  import type { Snippet } from 'svelte';

  interface IGroupData {
    heading: string;
    content: Snippet;
  }

</script>

<h2 class="text-2xl font-medium mb-4">Command</h2>

<div class="mb-3">
  <CommandRoot>
    
    <CommandInput></CommandInput>
    
    <CommandList>
      <CommandGroup heading="Suggestions">
        <CommandItem onClick={() => alert("Calendar")}>
          <CalendarLineBusiness size="1em"/>
          <span>Calendar</span>
        </CommandItem>
        <CommandItem onClick={() => alert("Search Emoji")}>
          <UserSmileLineUserFaces size="1em" />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem disabled>Calculator</CommandItem>
      </CommandGroup>
      
      <CommandGroup heading="Settings">
        <CommandItem  onClick={() => alert("Profile")}>Profile</CommandItem>
        <CommandItem  onClick={() => alert("Billing")}>Billing</CommandItem>
        <CommandItem  onClick={() => alert("Settings")}>Settings</CommandItem>
      </CommandGroup>
    </CommandList>

  </CommandRoot>
</div>

<TextInputMilk id="new-100" placeholder="Focus on this after press 'Tab'" size="lg"/>