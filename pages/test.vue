<script setup lang="ts">
const { data } = await useFetch('/api/menus/47')

</script>

<template>
  Menu:
  <NuxtLink to="/test2">Test2</NuxtLink>
  <p v-for="menu in data">
    {{ menu.ID }} - {{ menu.title }} - {{ menu.menu_item_parent }}
  </p>
</template>