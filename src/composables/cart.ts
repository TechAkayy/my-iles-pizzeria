const cart = ref([])

const cartStatusMsg = computed(() => {
  return cart.value.length
    ? `${cart.value.length} items.` //
    : `Cart is empty!`
})

export const useCart = () => {
  return {
    cart,
    cartStatusMsg,
  }
}
