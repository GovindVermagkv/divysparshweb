<!-- src/components/CartPage.vue -->
<template>
  <div class="p-4">
    <h2 class="text-center mb-4 text-success">Your Cart</h2>

    <div class="container" v-if="cart.length > 0">
      <div class="main_custom">
        <ul class="list-group mb-3">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="item in cart"
            :key="item.id"
          >
            <div class="d-flex align-items-center">
              <img
                :src="item.image"
                alt="Product Image"
                class="img-thumbnail me-3"
                style="width: 70px; height: 70px"
              />
              <div>
                <h5>{{ item.title }}</h5>
                <p class="mb-2">Price: ${{ item.price }}</p>
                <div class="d-flex align-items-center">
                  <button
                    class="btn btn-outline-secondary btn-sm me-2 text-danger"
                    @click="decreaseQuantity(item)"
                  >
                    -
                  </button>
                  <span class="mx-3">{{ item.quantity }}</span>
                  <button
                    class="btn btn-outline-secondary btn-sm ms-2 text-danger"
                    @click="increaseQuantity(item)"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button class="btn btn-danger btn-sm" @click="removeFromCart(item)">
              Remove
            </button>
          </li>
        </ul>
      </div>
      <div class="card list-group-item custom_card p-4">
        <p class="text-start mb-4">
          <span class="text-danger mx-2">Total Price:</span> ${{ totalPrice }}
        </p>
        <p class="text-start mb-5">
          <span class="text-danger mx-2">GST (18%):</span> ${{ gstAmount }}
        </p>
        <h3 class="text-start">
          <span class="text-danger mx-2">Total Amount:</span> ${{
            totalWithGST
          }}
        </h3>
      </div>
    </div>
    <div class="zerovalue" v-else>
      <p class="text-center text-danger">No items in the cart yet.</p>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart", "totalPrice", "gstAmount", "totalWithGST"]),
  },
  methods: {
    increaseQuantity(item) {
      this.$store.commit("INCREASE_ITEM_QUANTITY", item.id);
    },
    decreaseQuantity(item) {
      this.$store.commit("DECREASE_ITEM_QUANTITY", item.id);
    },
    removeFromCart(item) {
      this.$store.commit("REMOVE_FROM_CART", item.id);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100% !important;
}
.main_custom {
  width: 70% !important;
}
.zerovalue {
  width: 100%;
  text-align: center;
}
.btn-outline-secondary {
  box-shadow: none !important;
  outline: none !important;
  width: 30px;
  font-weight: bold;
  color: red !important;
}
.btn-outline-secondary:focus {
  box-shadow: none !important;
  outline: none !important;
}
.btn-outline-secondary:hover {
  background-color: red;
  color: white !important;
  border-color: transparent !important;
}
.zerovalue img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
.custom_card {
  min-height: 150px !important;
  max-height: 200px !important;
  /* background-color: red !important; */
}

.list-group-item {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.img-thumbnail {
  border-radius: 0.25rem;
}

.btn-danger {
  background-color: #dc3545;
}

@media screen and (max-width: 990px) {
  .container {
    flex-direction: column;
  }
  .main_custom {
    width: 100% !important;
  }
}
</style>
