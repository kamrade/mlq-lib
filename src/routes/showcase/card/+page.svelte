<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent, TextInput } from '@lib';
  import Label from "@lib/Label/Label.svelte";
</script>

<h2 class="text-2xl font-medium mb-4">Card</h2>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<div class="mb-3">
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
  </Card>
</div>

<style lang="scss">

</style>
