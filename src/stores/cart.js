import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      toggleCart: false,
      items: []
    }
  },
  getters: {
    cartItems(){
      return this.items.reduce((acc, item) => acc + item.amount, 0)
    }
  },
  actions: {
    addToCart(product) {
      const existingProduct = this.items.find(element => element.product.id === product.id);

      if(existingProduct) {
        existingProduct.amount = existingProduct.amount+1
      } else {
        this.items.push({product, amount: 1})
      }

    }
  }
})
