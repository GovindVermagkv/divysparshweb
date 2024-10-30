<template>
    <div class="container mt-5">
      <div v-if="product" class="product-details">
        <img :src="product.image" alt="product.title" class="img-fluid mb-4" />
        <h2 class="text-danger">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <p>Category: {{ product.category }}</p>
        <p>Price: ${{ product.price }}</p>
        <button class="btn btn-danger" @click="addToCart(product)">
          {{ isInCart(product.id) ? "Added to Cart" : "Add to Cart" }}
        </button>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
  
      <!-- Product Suggestions -->
      <div v-if="suggestedProducts.length" class="suggestions mt-5">
        <h3 class="my-4">Suggested Products</h3>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="suggestion in suggestedProducts" :key="suggestion.id">
            <div class="card">
              <img :src="suggestion.image" alt="suggestion.title" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-danger">{{ suggestion.title }}</h5>
                <p class="card-text">Price: ${{ suggestion.price }}</p>
                <router-link :to="{ name: 'ProductDetails', params: { id: suggestion.id } }" class="btn btn-link">
                  View Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Api from '../Api'
  import { mapGetters } from "vuex";
  
  export default {
    data() {
      return {
        product: null,
        products: [],
        suggestedProducts: [],
      };
    },
    computed: {
      ...mapGetters(["cart"]),
    },
    methods: {
      addToCart(product) {
        this.$store.dispatch("addToCart", product);
      },
      isInCart(id) {
        return this.cart.some((item) => item.id === id);
      },
      getProductDetails() {
        Api.getProductsById(this.$route.params.id)
          .then((response) => {
            this.product = response.data;
            this.getProductsApi();
          })
          .catch((err) => {
            console.error(err);
          });
      },
      getProductsApi() {
        Api.getProducts()
          .then((response) => {
            this.products = response.data;
            this.generateSuggestions();
          })
          .catch((err) => {
            console.error(err);
          });
      },
      generateSuggestions() {
        this.suggestedProducts = this.products
          .filter(p => p.id !== this.product.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
      },
    },
    mounted() {
      this.getProductDetails();
    },
    watch: {
      "$route.params.id": {
        handler() {
          this.getProductDetails(); // Reload product details and suggestions when the route ID changes
        },
        immediate: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .product-details img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
  }
  
  .suggestions h3 {
    margin-top: 30px;
  }
  
  .card {
    height: 100%;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(196, 87, 87, 0.1) !important;
  }
  .card:hover {
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
    height: 25px !important;
    overflow: hidden;
  }
  </style>
  