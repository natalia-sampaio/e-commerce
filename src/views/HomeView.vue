<script setup>
import Product from '../components/Product.vue'
/* import IconPlus from '../components/icons/IconPlus.vue';
import IconMinus from '../components/icons/IconMinus.vue';
import ItemsInput from '../components/ItemsInput.vue'; */
import IconCart from '../components/icons/IconCart.vue'
import { useCartStore } from '../stores/cart.js'
import { getFeaturedShoes, getDiscountedPrice, getImages } from '../services/products.js'
import IconHeart from '../components/icons/IconHeart.vue'
import { useFavoritesStore } from '../stores/favorites'

const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

defineProps({
  isLoggedIn: Boolean
})
</script>

<script>
export default {
  data() {
    return {
      featured: [],
      getDiscountedPrice: getDiscountedPrice
    }
  },
  async beforeMount() {
    this.featured = await getFeaturedShoes()
  }
}
</script>

<template>
  <main class="xl:mx-40">
    <Product
      v-for="product in featured"
      :key="product.id"
      v-model:brandName="product.brand"
      v-model:productName="product.title"
      v-model:productDescription="product.description"
      :finalCost="getDiscountedPrice(product.id, featured)"
      :images="getImages(product.id, featured)"
    >
      <template #discount v-if="product.discountPercentage > 0">
        <span class="bg-orange-pale text-orange-main rounded px-2 py-[0.1rem]"
          >{{ product.discountPercentage }}%</span
        >
      </template>
      <template #cost v-if="product.discountPercentage > 0">${{ product.price }}</template>
      <!-- <template #numberOfItems>
        <IconMinus @click.self="numberOfItems == 0 ? '' : numberOfItems--" />
        <ItemsInput v-model="numberOfItems" />
        <IconPlus @click.self="numberOfItems++" />
      </template> -->
      <template #addToCartButton>
        <button
          class="m-3 flex items-center justify-center text-white"
          @click.prevent="cartStore.addToCart(product)"
        >
          <IconCart :fill="'#ffffff'" class="mr-4" />
          Add to cart
        </button>
      </template>
      <template #addToFavoritesButton>
        <IconHeart
          v-if="isLoggedIn"
          stroke="#69707D"
          fill="none"
          class="w-10 h-10"
          @click.prevent="favoritesStore.addToFavorites(product)"
        />
      </template>
    </Product>
  </main>
</template>
