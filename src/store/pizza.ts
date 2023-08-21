export const usePizzaStore = defineStore('pizza', () => {
  const pizzas = []

  // 1. State (ref, reactive, etc) / getters (computed)
  const count = ref(0)
  const getCount = computed(() => count.value)

  // 2. Actions (functions)
  const increment = () => (count.value += 1)
  const decrement = () => (count.value -= 1)

  return {
    pizzas,
    count,
    getCount,
    increment,
    decrement,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePizzaStore as any, import.meta.hot))
}
