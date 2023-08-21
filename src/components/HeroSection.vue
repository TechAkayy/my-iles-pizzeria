<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'HeroSection',
  // 	}, 
  // })                
</script> 
<template>
    <section data-pg-name="hero" class="bg-secondary-500 poster relative text-gray-300">
        <div class="container mx-auto py-72 px-4">
            <div class="-mx-4 flex flex-wrap items-center justify-center space-y-6 lg:space-y-0">
                <div class="px-4 text-center w-full md:w-10/12 xl:w-9/12">
                    <p class="font-bold font-serif mb-1 text-2xl text-white">
            Are You Hungry? </p> 
                    <h1 class="capitalize font-bold mb-6 text-4xl text-white md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl">
            Fill your tummy with the Yummiest pizza in town           </h1>
                    <BaseButton size="xl" label="Add to Cart!" to="/order"></BaseButton>
                    <BaseButton variant="soft" size="xl" to="/menu">Our Menu </BaseButton>
                </div>                 
            </div>
        </div>
    </section>
</template>
<style scoped></style>
