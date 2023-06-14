<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <product-card :product="p"></product-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useHead} from "#head";

definePageMeta({
  layout:'productslayouts'
})
//fetch the products
const {data: products}=await useFetch('https://fakestoreapi.com/products')

useHead({
  title:'nuxt merch page',
  meta:[
    {name:'description',content:'Nuxt 3 Merch'}
  ]
})


</script>

<style lang="scss" scoped>

</style>