<script lang="ts">
  import {
    CommandRoot,
    CommandInput,
    CommandList,
    CommandGroup,
    CommandItem,
    TextInputMilk,
    Divider,
    PageTitle
  } from '@lib';
  import { CalendarLineBusiness, UserSmileLineUserFaces } from 'svelte-remix';
</script>

<PageTitle>Command Flat</PageTitle>
<Divider></Divider>

<div class="mb-3">
  <CommandRoot>

    <CommandInput></CommandInput>

    <CommandList>
      <CommandGroup>
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
    </CommandList>

  </CommandRoot>
</div>


<div class="mb-3">
  <CommandRoot>
    <CommandList>
      <CommandGroup>
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
    </CommandList>

  </CommandRoot>
</div>


<TextInputMilk id="new-100" placeholder="Focus on this after press 'Tab'" size="lg"/>
