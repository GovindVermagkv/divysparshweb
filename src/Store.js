// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [], // Cart initialized as an empty array
      products: [
        // Sample product data with image, quantity added
        { id: 1, title: 'Product 1', price: '10.00', category: 'Category A', description: 'Description of Product 1', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nike-running-shoes-on-black-background-with-colorful-splashes-image_2671040.jpg', quantity: 1 },
        { id: 2, title: 'Product 2', price: '15.00', category: 'Category B', description: 'Description of Product 2', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg', quantity: 1 },
        { id: 1, title: 'Product 1', price: '10.00', category: 'Category A', description: 'Description of Product 1', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nike-running-shoes-on-black-background-with-colorful-splashes-image_2671040.jpg', quantity: 1 },
        { id: 2, title: 'Product 2', price: '15.00', category: 'Category B', description: 'Description of Product 2', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg', quantity: 1 },
        { id: 1, title: 'Product 1', price: '10.00', category: 'Category A', description: 'Description of Product 1', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nike-running-shoes-on-black-background-with-colorful-splashes-image_2671040.jpg', quantity: 1 },
        { id: 2, title: 'Product 2', price: '15.00', category: 'Category B', description: 'Description of Product 2', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg', quantity: 1 },
        { id: 1, title: 'Product 1', price: '10.00', category: 'Category A', description: 'Description of Product 1', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nike-running-shoes-on-black-background-with-colorful-splashes-image_2671040.jpg', quantity: 1 },
        { id: 2, title: 'Product 2', price: '15.00', category: 'Category B', description: 'Description of Product 2', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg', quantity: 1 },
        { id: 1, title: 'Product 1', price: '10.00', category: 'Category A', description: 'Description of Product 1', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nike-running-shoes-on-black-background-with-colorful-splashes-image_2671040.jpg', quantity: 1 },
        { id: 2, title: 'Product 2', price: '15.00', category: 'Category B', description: 'Description of Product 2', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg', quantity: 1 },
        { id: 1, title: 'Product 1', price: '10.00', category: 'Category A', description: 'Description of Product 1', image: 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nike-running-shoes-on-black-background-with-colorful-splashes-image_2671040.jpg', quantity: 1 },
        { id: 2, title: 'Product 2', price: '15.00', category: 'Category B', description: 'Description of Product 2', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg', quantity: 1 },
        // Add more products as needed...
      ],
    };
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if product already in cart
      } else {
        state.cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
      }
    },
    INCREASE_ITEM_QUANTITY(state, id) {
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity += 1; // Increase the quantity
      }
    },
    DECREASE_ITEM_QUANTITY(state, id) {
      const item = state.cart.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease the quantity if more than 1
      } else if (item) {
        // Remove the item if quantity reaches 0
        state.cart = state.cart.filter(item => item.id !== id);
      }
    },
    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter(item => item.id !== id); // Remove the item from cart
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product); // Commit the mutation to add to cart
    },
  },
  getters: {
    cart(state) {
      return state.cart; // Getter for cart
    },
    cartCount(state) {
      return state.cart.length;
    },
    totalPrice(state) {
      // Calculate total price based on quantity
      return state.cart.reduce((total, item) => {
        return total + (parseFloat(item.price) * item.quantity);
      }, 0).toFixed(2);
    },
    gstAmount(state, getters) {
      // Calculate GST amount based on total price
      const totalPrice = parseFloat(getters.totalPrice); // Get total price
      return (totalPrice * 0.18).toFixed(2); // Return GST amount
    },
    totalWithGST(state, getters) {
      // Calculate total amount including GST
      const totalPrice = parseFloat(getters.totalPrice); // Get total price
      const gst = parseFloat(getters.gstAmount); // Get GST amount
      return (totalPrice + gst).toFixed(2); // Return total amount with GST
    },
    products(state) {
      return state.products; // Getter for products
    },
  },
});

export default store;
