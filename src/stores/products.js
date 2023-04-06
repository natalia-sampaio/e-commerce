import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                title: "Fall edition sneakers",
                description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                price: 250,
                discountPercentage: 50,
                rating: 4.69,
                stock: 94,
                brand: "Sneaker company",
                category: "mens-shoes",
                thumbnail: "/@/assets/images/image-product-1-thumbnail.jpg",
                images: []                
            },
            {
                id: 2,
                title: "Fall limited edition sneakers",
                description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                price: 320,
                discountPercentage: 0.0,
                rating: 4.69,
                stock: 94,
                brand: "Sneaker company",
                category: "womens-shoes",
                thumbnail: "/@/assets/images/image-product-1-thumbnail.jpg",
                images: []
            }
        ]
    }),
    actions: {
        getDiscountedPrice(id) {
            const product = this.products.find(element => element.id === id);

            const discountedPrice = product.discountPercentage > 0.0 ? product.price/100*product.discountPercentage : product.price;

            return discountedPrice;
        }
    }
})
