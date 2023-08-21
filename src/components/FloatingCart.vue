<script setup lang="ts">
  import { useCart } from '@/composables/cart'
  const cartStore = useCart()
  const { cart } = storeToRefs(cartStore)

  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'FloatingCart',
  // 	},
  // })
</script>
<template>
  <div class="flex items-center text-white">
    <div class="bottom-12 fixed right-2 z-20">
      <BaseButton size="xl" variant="soft">
        <BaseIcon name="i-material-symbols-add-shopping-cart"></BaseIcon>
        <span class="ml-2">{{ cart.length }} items added</span>
      </BaseButton>
    </div>
  </div>
</template>
<style scoped></style>
