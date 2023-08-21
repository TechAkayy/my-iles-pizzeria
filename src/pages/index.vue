<page>
    title: Home
</page>
<template>
  <main>
    <HeroSection client:load />
    <HighlightSection client:idle />
    <div data-pg-name="divider" class="container mx-auto p-4 w-1/2">
      <hr class="border-gray-200" />
    </div>
    <!-- https://github.com/ElMassimo/iles/issues/172 -->
    <PizzaStoreAsync client:load />

    <DeliverySection client:visible />
    <SubscribeSection client:visible />
  </main>
</template>
<style scoped></style>
