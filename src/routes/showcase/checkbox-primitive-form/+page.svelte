<script lang="ts">
  import {Checkbox, ButtonMilk, Divider, PageTitle} from '@lib';
  let agree = $state(false);
</script>

<PageTitle>Checkbox Primitive in the Form</PageTitle>
<Divider></Divider>

<div class="p-6 border border-gray-300 rounded-xl">
  <form onsubmit={(e) => console.log(e)}>

    <label class="flex gap-2" for="agree">
      <span style="padding-top: 4px">
        <Checkbox id="agree" bind:checked={agree} name="agree" value="agree"/>
      </span>
      <span>По сообщению Royal World Thailand, ключевые королевские мероприятия, включая традиционную церемонию в тронном зале Амарин Виничай в Бангкоке, были отменены по распоряжению Короля. Причиной стало обострение конфликта, начавшегося 24 июля на тайско-камбоджийской границе, в результате которого пострадали гражданские лица в провинциях Убонратчатхани, Сурин и Сисакет.</span>
    </label>

    <hr class="my-4 border-t border-gray-300" />

    <p>Agree: {agree}</p>

    <hr class="my-4 border-t border-gray-300" />

    <ButtonMilk size="md" type="submit">Submit</ButtonMilk>

  </form>
</div>
