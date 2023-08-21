// import { pizzas as pizzasLocal } from '~~/db.json'
import { $fetch } from 'ofetch'

export const usePizzaStore = defineStore('pizza', () => {
  // const pizzas = pizzasLocal
  const pizzas = ref([])

  const fetchPizzas = async () => {
    try {
      const data = await $fetch(
        'https://my-json-server.typicode.com/TechAkayy/my-iles-pizzeria/pizzas',
      )
      pizzas.value.push(...data)
    } catch (err) {
      console.log(err)
    }
  }

  fetchPizzas()

  return {
    pizzas,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePizzaStore as any, import.meta.hot))
}
