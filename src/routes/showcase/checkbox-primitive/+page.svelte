<script lang="ts">
  import { Checkbox } from '@lib';
  let agree = $state(false);
</script>

<label class="flex gap-2 my-6" for="agree1">
  <div style="padding-top: 4px">
    <Checkbox id="agree1" bind:checked={agree} name="agree"/>
  </div>
  <span>По сообщению Royal World Thailand, ключевые королевские мероприятия, включая традиционную церемонию в тронном зале Амарин Виничай в Бангкоке, были отменены по распоряжению Короля. Причиной стало обострение конфликта, начавшегося 24 июля на тайско-камбоджийской границе, в результате которого пострадали гражданские лица в провинциях Убонратчатхани, Сурин и Сисакет.</span>
</label>

<p class="my-3">Agree: {agree}</p>
