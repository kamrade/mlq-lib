<script>
  import { BookMarkedFillDocument, Bookmark3FillBusiness, AddCircleFillSystem, AddLargeFillSystem, CloseLargeLineSystem,Chat1FillCommunication } from 'svelte-remix';
  import {ButtonMilk, Divider, PageTitle} from "@lib";
</script>

<PageTitle>Button Milk Icon Component</PageTitle>
<Divider></Divider>

<div class="mb-8 flex gap-1 items-start">
  <ButtonMilk iconButton variant="primary-emphasis" size="sm">
    <CloseLargeLineSystem size="1em"/>
  </ButtonMilk>
  <ButtonMilk iconButton variant="primary-outlined" size="sm">
    <AddLargeFillSystem size="1em"/>
  </ButtonMilk>
</div>

<div class="mb-8 flex gap-2 items-start">
  <ButtonMilk iconButton variant="base-outlined" size="md">
    <AddCircleFillSystem size="1em"/>
  </ButtonMilk>
</div>

<div class="mb-8 flex gap-2 items-start">
  <ButtonMilk iconButton variant="base-outlined" size="lg">
    <BookMarkedFillDocument size="1em"/>
  </ButtonMilk>
  <ButtonMilk iconButton variant="primary-emphasis" size="lg">
    <Bookmark3FillBusiness size="1em"/>
  </ButtonMilk>
  <ButtonMilk iconButton variant="primary-outlined" size="lg">
    <Chat1FillCommunication size="1em"/>
  </ButtonMilk>
</div>
