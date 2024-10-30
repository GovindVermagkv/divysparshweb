<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in paginatedProducts" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top" :alt="product.title" />
          <div class="card-body">
            <h5 class="card-title text-danger">{{ product.title }}</h5>
            <p class="card-text description">{{ product.description }}</p>
            <p class="card-text">Category: {{ product.category }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
            <div class="buttons_custom">
              <button class="btn btn-danger" @click="addToCart(product)" :disabled="isInCart(product.id)">
              {{ isInCart(product.id) ? "Added to Cart" : "Add to Cart" }}
            </button>
            <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="btn btn-link">
              View Details
            </router-link>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="pagination-controls">
      <button class="btn btn-outline-danger" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span class="mx-4">Page {{ currentPage }} of {{ totalPages }}</span>
      <button class="btn btn-outline-danger" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import Api from '../Api'
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      products: [],          // Local data property for API-fetched products
      productsPerPage: 9,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      return this.products.slice(start, start + this.productsPerPage);
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    isInCart(id) {
      return this.cart.some((item) => item.id === id);
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    getProductsApi() {
      Api.getProducts()
        .then((response) => {
          this.products = response.data;  // Store API data in local products
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getProductsApi();
  },
};
</script>

<style scoped>
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.card {
  height: 100%;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(196, 87, 87, 0.1) !important;
}
.card:hover {
  height: 100%;
  transform: translateY(-10px);
  cursor: pointer;
}
.card-img-top {
  height: 200px !important;
  object-fit: contain;
  padding: 30px;
  transition: 0.3s;
}
.card-img-top:hover {
  padding: 20px;
}
.card-title {
  height: 30px !important;
  overflow: hidden;
}
.description {
  height: 100px !important;
  overflow: hidden;
}
.buttons_custom{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */
}


</style>
