<script setup>
import { useCartStore } from '../stores/cart';
import { useFavoritesStore } from '../stores/favorites';
import IconCart from './icons/IconCart.vue';
import IconDelete from './icons/IconDelete.vue';
import SlideDownFade from './SlideDownFade.vue';

const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

const discountedPrice = (product) => {
    const discountedPrice = product.discountPercentage > 0.0 ? product.price - ((product.price / 100) * product.discountPercentage) : product.price;

    return discountedPrice.toFixed(2);
}
</script>

<template>
    <SlideDownFade>
        <div
            class="bg-white rounded-lg m-2 absolute top-14 xl:top-24 right-0 xl:right-60 left-0 xl:left-auto z-10 min-h-[30%] max-w-md min-w-[25%] shadow-2xl">
            <div class="border-b border-blue-grayish">
                <div class="p-6">
                    <span>Favorites</span>
                </div>
            </div>
            <div v-if="favoritesStore.favoriteItems > 0">
                <div v-for="item in favoritesStore.items" :key="item.product.id"
                    class="text-blue-dark-grayish font-normal m-6 flex justify-between items-center">
                    <div class="flex">
                        <img :src="item.product.thumbnail" alt="" class="rounded h-14" />
                        <div class="m-3">
                            <h2 class="capitalize">{{ item.product.title }}</h2>
                            <span>${{ discountedPrice(item.product) }} </span><span> x {{ item.amount }} </span><span
                                class="font-bold text-black"> ${{ discountedPrice(item.product) * item.amount }}</span>
                        </div>
                    </div>
                    <div>
                        <IconDelete @click="favoritesStore.deleteItem(item.product.id)" class="mb-3" />
                        <IconCart fill="#69707D" @click="cartStore.addToCart(item.product)"/>
                    </div>
                </div>
            </div>
            <div v-else class="text-blue-dark-grayish text-center pt-16">
                <span>You have no favorite items.</span>
            </div>
        </div>
    </SlideDownFade>
</template>
