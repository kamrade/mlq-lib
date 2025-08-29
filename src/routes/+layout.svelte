<script lang="ts">
  import { navigating } from '$app/state';
  import { StickyHeader } from "@lib";

  let { children } = $props();
  import '../styles/index.css';

</script>



<div class="onest-font text-gray-700">
  <div class="min-h-screen flex flex-col">


    <!-- Header -->
    <StickyHeader>
      <header class="bg-gray-800 text-white p-2">
        <div class="container mx-auto">
          <div class="flex gap-6">
            <h1 class="text-xl font-medium uppercase tracking-widest">Milk KIT</h1>
            {#if navigating.to}
              <p class="text-gray-600">Loading</p>
            {/if}
          </div>
        </div>
      </header>
    </StickyHeader>

    <div class="container mx-auto">
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="py-4 hidden md:block" style="width: 320px; min-width: 320px;">
          <nav class="navigation">
            <ul class="space-y-2">
              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium">Accordion</li>
              <li><a href="/showcase/accordion" class="text-gray-700 hover:underline">Accordion basic</a></li>

              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Card</li>
              <li><a href="/showcase/card" class="text-gray-700 hover:underline">Card basic</a></li>

              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Button</li>
              <li><a href="/showcase/button-primitive" class="text-gray-700 hover:underline">Button Primitive</a></li>
              <li><a href="/showcase/button-milk" class="text-gray-700 hover:underline">Button Milk</a></li>
              <li><a href="/showcase/button-actions" class="text-gray-700 hover:underline">Button Actions</a></li>
              
              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">TextInput</li>
              <li><a href="/showcase/text-input-primitive" class="text-gray-700 hover:underline">Text Input Primitive</a></li>
              <li><a href="/showcase/text-input-primitive-actions" class="text-gray-700 hover:underline">Text Input Primitive Actions</a></li>
              <li><a href="/showcase/text-input-label" class="text-gray-700 hover:underline">Text Input with Label</a></li>
              <li><a href="/showcase/text-input-milk" class="text-gray-700 hover:underline">Text Input Milk</a></li>
              <li><a href="/showcase/text-input-block" class="text-gray-700 hover:underline">Text Input Block</a></li>
              <li><a href="/showcase/text-input-bindable" class="text-gray-700 hover:underline">Text Input Bindable</a></li>
              <li><a href="/showcase/text-input-autofocus" class="text-gray-700 hover:underline">Text Input Autofocus</a></li>
              <li><a href="/showcase/text-input-milk-autofocus" class="text-gray-700 hover:underline">Text Input Milk Autofocus</a></li>
              <li><a href="/showcase/text-input-block-autofocus" class="text-gray-700 hover:underline">Text Input Block Autofocus</a></li>
              
              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Checkbox</li>
              <li><a href="/showcase/checkbox-primitive" class="text-gray-700 hover:underline">Checkbox Primitive</a></li>
              <li><a href="/showcase/checkbox-primitive-form" class="text-gray-700 hover:underline">Checkbox Primitive Form</a></li>
              
              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Menu</li>
              <li><a href="/showcase/menu-hover" class="text-gray-700 hover:underline">Menu on hover</a></li>
              <li><a href="/showcase/menu-onclick" class="text-gray-700 hover:underline">Menu on click</a></li>
              <li><a href="/showcase/menu-portal" class="text-gray-700 hover:underline">Menu Portal</a></li>
              
              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Command</li>
              <li><a href="/showcase/command" class="text-gray-700 hover:underline">Command</a></li>
              <li><a href="/showcase/command-flat" class="text-gray-700 hover:underline">Command flat</a></li>
              <li><a href="/showcase/command-in-loop" class="text-gray-700 hover:underline">Command in loop</a></li>
              <li><a href="/showcase/command-in-menu" class="text-gray-700 hover:underline">Command in menu</a></li>
              <li><a href="/showcase/command-select" class="text-gray-700 hover:underline">Select with Command</a></li>

              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Selects</li>
              <li><a href="/showcase/select" class="text-gray-700 hover:underline">Select base</a></li>
              <li><a href="/showcase/select-flat" class="text-gray-700 hover:underline">Select flat</a></li>
              <li><a href="/showcase/select-loading" class="text-gray-700 hover:underline">Select loading</a></li>
              <li><a href="/showcase/select-inner-loading" class="text-gray-700 hover:underline">Select inner loading</a></li>

              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Dialogs</li>
              <li><a href="/showcase/modal-base" class="text-gray-700 hover:underline">Modal</a></li>

              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium pt-3">Icons</li>
              <li><a href="/showcase/icon-loading-animation" class="text-gray-700 hover:underline">Icon Loading Animation</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Main content -->
        <main class="flex-1 p-6">
          {@render children()}
        </main>
      </div>
    </div>
  
  </div>
</div>

<style lang="scss">
  .navigation {
    padding: 0 0 0 1.5rem;
    border-right: 1px solid var(--color-gray-400);
  }
</style>
