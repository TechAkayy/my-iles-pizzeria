<script setup lang="ts">
  const currentRoute = useRoute()
</script>
<template>
  <div class="relative">
    <MetaTags />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar
        :class="[
          currentRoute.path === '/' ? 'absolute bg-transparent z-10' : '',
        ]"
      ></NavBar>
      <div class="shadow">
        <slot />
      </div>
      <TheFooter client:visible />
    </div>
  </div>
</template>
<style scoped></style>
