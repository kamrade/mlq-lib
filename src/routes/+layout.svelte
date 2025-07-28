<script lang="ts">
  let { children } = $props();
  import '../styles/index.css';
</script>



<div class="onest-font">
  <div class="min-h-screen flex flex-col">

    <!-- Header -->
    <header class="bg-gray-800 text-white p-2">
      <div class="container mx-auto">
        <h1 class="text-xl font-medium uppercase tracking-widest">Milk KIT</h1>
      </div>
    </header>

    <div class="container mx-auto">
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="w-64 py-4 hidden md:block">
          <nav>
            <ul class="space-y-2">
              <li class="text-xs uppercase tracking-wider text-gray-500 font-medium">Button</li>
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
              
              <li><a href="/showcase/checkbox-primitive" class="text-gray-700 hover:underline">Checkbox Primitive</a></li>
              <li><a href="/showcase/checkbox-primitive-form" class="text-gray-700 hover:underline">Checkbox Primitive Form</a></li>
              
              <li><a href="/showcase/menu" class="text-gray-700 hover:underline">Menu on hover</a></li>
              <li><a href="/showcase/menu-onclick" class="text-gray-700 hover:underline">Menu on click</a></li>
              
              <li><a href="/showcase/command" class="text-gray-700 hover:underline">Command</a></li>
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