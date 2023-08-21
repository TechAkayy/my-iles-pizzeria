import { $fetch } from 'ofetch'

const pizzas = ref([])

export const usePizza = () => {
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

  return {
    fetchPizzas,
  }
}
