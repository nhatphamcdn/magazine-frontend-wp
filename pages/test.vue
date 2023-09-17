<script setup lang="ts">
import { toNested } from '@/utils/to-nested'
const { data } = await useFetch('/api/menus/47')

const nestedMenus = toNested(data.value)

</script>

<template>
  Menu:
  <NuxtLink to="/test2">Test2</NuxtLink>
  <p v-for="menu in nestedMenus">
    {{ menu.id }} - {{ menu.attrs.title }} - {{ menu.parentId }}
    <p v-for="submenu in menu.children" style="margin-left: 16px;">
      {{ submenu.id }} - {{ submenu.attrs.title }} - {{ submenu.parentId }}
    </p>
  </p>
</template>