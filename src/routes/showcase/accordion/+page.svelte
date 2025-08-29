<script lang="ts">
  import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "@lib";
  let value = $state('accordion-2');
</script>

<h2 class="text-2xl font-medium mb-4">Accordion</h2>

<hr class="mt-4 mb-8 border-t border-gray-300" />

<div class="mb-3">
  <AccordionRoot {value}>

    <AccordionItem value="accordion-1">
      <AccordionTrigger>
        <span class="text-sm font-medium">Product Information</span>

      </AccordionTrigger>
      <AccordionContent>
        <span class="text-sm">
          Our flagship product combines cutting-edge technology with sleek design.
          Built with premium materials, it offers unparalleled performance and
          reliability.
        </span>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="accordion-2">
      <AccordionTrigger>
        <span class="text-sm font-medium">Shipping Details</span>
      </AccordionTrigger>
      <AccordionContent>
        <span class="text-sm">
          Our flagship product combines cutting-edge technology with sleek design.
          Built with premium materials, it offers unparalleled performance and
          reliability.
        </span>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="accordion-3">
      <AccordionTrigger>
        <span class="text-sm font-medium">Return Policy</span>
      </AccordionTrigger>
      <AccordionContent>
        <span class="text-sm">
          Our flagship product combines cutting-edge technology with sleek design.
          Built with premium materials, it offers unparalleled performance and
          reliability.
        </span>
      </AccordionContent>
    </AccordionItem>

  </AccordionRoot>
</div>
