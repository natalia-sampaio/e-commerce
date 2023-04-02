import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      toggleCart: false,
      cartItems: []
    }
  },
  getters: {
    count: (state) => state.cartItems.length
  }
})
