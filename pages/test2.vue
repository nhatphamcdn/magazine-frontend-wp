<script setup lang="ts">
const { data } = await useFetch('/api/menus/47')

</script>

<template>
  <NuxtLink to="/test">Test</NuxtLink>
  <p v-for="menu in data">
    {{ menu.ID }} - {{ menu.title }} - {{ menu.menu_item_parent }}
  </p>
</template>