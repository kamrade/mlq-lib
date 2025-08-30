<script lang="ts">
  import { navigating } from '$app/state';
  import { type Snippet } from "svelte";
  import {StickyHeader, PageContainer, SidebarGroupTitle, SidebarLink} from "@lib";
  import '../styles/index.css';
  import { type INavigationItem } from './nav-data';

  let { children, data } : { children: Snippet; data: { navigationData: INavigationItem[] } } = $props();

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

    <PageContainer>
      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="py-4 hidden md:block" style="width: 320px; min-width: 320px;">
          <nav class="navigation">
            <ul class="space-y-2 px-3">

              {#each data.navigationData as navItem (navItem.label + crypto.randomUUID())}
                {#if navItem.type === 'heading'}
                  <SidebarGroupTitle>{navItem.label}</SidebarGroupTitle>
                {:else}
                  <SidebarLink link={ navItem?.link || '' }>{navItem.label}</SidebarLink>
                {/if}
              {/each}


            </ul>
          </nav>
        </aside>

        <!-- Main content -->
        <main class="flex-1 p-6">
          {@render children()}
        </main>
      </div>
    </PageContainer>
  
  </div>
</div>

<style lang="scss">
  .navigation {
    padding: 0 0 0 1.5rem;
  }
</style>
