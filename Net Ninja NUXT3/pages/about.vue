<template>
  <div>
    <h2>about</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum incidunt, laboriosam nam nobis non quod voluptas?
      Alias aliquam, aut distinctio doloribus eius eos molestias nisi quae quasi, quibusdam quos voluptatibus!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum incidunt, laboriosam nam nobis non quod voluptas?
      Alias aliquam, aut distinctio doloribus eius eos molestias nisi quae quasi, quibusdam quos voluptatibus!</p>
  </div>

  <div>{{data}}</div>
</template>

<script setup>
const {data}=await useFetch('/api/currency/CAD')


</script>

<style scoped>

</style>