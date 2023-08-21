<script setup lang="ts">
  import { $fetch } from 'ofetch'

  // import { pizzas } from '~~/db.json'

  // const { pizzas, fetchPizzas } = usePizza()
  // await fetchPizzas()
  const pizzas = await $fetch(
    'https://my-json-server.typicode.com/TechAkayy/my-iles-pizzeria/pizzas',
  )
  const { cart } = useCart()

  const cartStatusMsg = computed(() => {
    return cart.value.length
      ? `${cart.value.length} items.` //
      : `Cart is empty!`
  })

  const addToCart = (pizza) => {
    cart.value.push(pizza)
  }
</script>
<template>
  <section data-pg-name="menu" class="pb-24 pt-12 text-center text-gray-50">
    {{ cartStatusMsg }}
    <div class="container mx-auto px-4 relative">
      <div class="bg-gray-50 px-12 py-16 rounded-lg text-gray-400">
        <div class="-mx-4 flex flex-wrap items-center justify-center mb-12">
          <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
            <h2 class="font-medium mb-1 text-primary-500">Our Menu</h2>
            <h3 class="capitalize font-bold text-4xl text-gray-900">
              Most Loved Items
            </h3>
          </div>
        </div>
        <div class="-mx-3 flex flex-wrap justify-center mb-12">
          <Suspense>
            <PizzaCard
              v-for="(pizza, index) in pizzas"
              :key="index"
              v-bind="pizza"
              @add-to-cart="addToCart(pizza)"
            />
          </Suspense>
        </div>
        <div>
          <BaseButton to="#" size="lg">Full Menu</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
