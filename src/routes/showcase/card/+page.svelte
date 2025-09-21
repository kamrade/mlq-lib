<script lang="ts">
  import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    TextInput,
    ButtonMilk,
    Divider, PageTitle
  } from '@lib';
  import Label from "@lib/uikit/Label/Label.svelte";
  import { CheckboxCircleFillSystem } from "svelte-remix";
</script>

<PageTitle>Card</PageTitle>
<Divider></Divider>

<div class="mb-3">
  <div class="grid grid-cols-8 gap-3">
    <div class="col-span-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Card title
          </CardTitle>
          <CardDescription>
            Card description
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Label forValue="input-inside-of-the-label">
            <p class="mb-1">Test label</p>
            <TextInput id="input-inside-of-the-label" placeholder="Test Placeholder" />
          </Label>
          <Label forValue="input-2">
            <p class="mb-1">Test label</p>
            <TextInput id="input-2" placeholder="Test Placeholder" />
          </Label>
        </CardContent>

        <CardFooter>
          <ButtonMilk variant="base-emphasis" size="lg"><CheckboxCircleFillSystem size="1em"/>Confirm</ButtonMilk>
          <ButtonMilk variant="base-contained" size="lg"><CheckboxCircleFillSystem size="1em"/>Cancel</ButtonMilk>
        </CardFooter>

      </Card>
    </div>

  </div>
</div>

<style lang="scss">

</style>
