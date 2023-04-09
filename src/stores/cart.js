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
    },
    deleteItem(product) {
      this.items.splice(this.items.findIndex(element => element.id === product.id), 1)
    },
    getDiscountedPrice(id) {
      const product = this.items.find(element => element.id === id);

      const discountedPrice = product.discountPercentage > 0.0 ? product.price - ((product.price / 100) * product.discountPercentage) : product.price;

      return discountedPrice.toFixed(2);
    }
  }
})
