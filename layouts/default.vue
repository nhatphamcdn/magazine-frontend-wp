<script lang="ts" setup>
  const formSearch = ref<boolean>(false)
</script>

<template>
  <div min-h-screen>
    <header class="fixed top-0 left-0 right-0 z-50">
      <nav class="bg-black">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex justify-between">
            <NuxtLink to="/" flex items-center>
              <NavLogo />
            </NuxtLink>

            <div class="flex flex-row">
              <!-- nav menu -->
              <NavHeader />

              <!-- search form & mobile nav -->
              <div class="flex flex-row items-center text-gray-300">
                <div class="search-dropdown relative border-r lg:border-l border-gray-800 hover:bg-gray-900">
                  <NavSearchIcon :isOpenSearch="formSearch" @click="formSearch = !formSearch" />
                  <NavSearchForm v-if="formSearch" />
                </div>

                <div class="relative hover:bg-gray-800 block lg:hidden">
                  <button type="button" class="menu-mobile block py-3 px-6 border-b-2 border-transparent">
                    <span class="sr-only">Mobile menu</span>
                    <svg class="inline-block h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg> Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header><!-- end header -->

    <slot></slot>
  </div>
</template>
