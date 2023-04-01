import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      toggleCart: false,
      cartItems: [],
      item: "",
      price: 0,
      quantity: 0,
      discount: false,
      discountValue: 0
    }
  },
  getters: {
    count: (state) => state.cartItems.length,
    priceWithDiscount() {
      return this.price * this.discountValue
    }
  }
})
