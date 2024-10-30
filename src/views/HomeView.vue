<template>
  <div class="home p-4">
    <h1 class="text-center">PRODUCTS LIST</h1>
    <div class="container py-4">

      <ProductCard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from './ProductCard.vue';

export default {
  name: 'HomeView',
  components: {
    ProductCard
  }
}
</script>
<style scoped>
@media screen and (max-width:556px) {
  .home{
    padding: 20px 10px !important;
  }
}
</style>