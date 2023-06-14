<template>
  <div>
    <Head>
      <Title>
        Nuxt Dojo || {{product.title}}
      </Title>

      <Meta name="description" :content="product.description"></Meta>
    </Head>

    <ProductDetails :product="product"></ProductDetails>
  </div>
</template>

<script setup>
definePageMeta({
  layout:'productslayouts'
})
const {id}=useRoute().params
const uri='https://fakestoreapi.com/products/' + id
const {data: product}=await useFetch(uri,{key:id})

if (!product.value)
{
  throw createError({statusCode: 404,statusMessage:'product does not exist',fatal:true});
}

</script>

<style lang="scss" scoped>

</style>