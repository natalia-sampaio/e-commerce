import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                images: [],
                brand: "Sneaker company",
                name: "Fall limited edition sneakers",
                description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                cost: 250,
                discount: 50,
                finalCost: 125,
                numberOfItems: 0
            },
            {
                id: 2,
                images: [],
                brand: "Sneaker company",
                name: "Fall limited edition sneakers",
                description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                cost: 250,
                discount: 0,
                finalCost: 250,
                numberOfItems: 0
            }
        ]
    }),
    getters: {
        count: (state) => state.cartItems.length,
        priceWithDiscount() {
            return this.price * this.discountValue
        }
    }
})
