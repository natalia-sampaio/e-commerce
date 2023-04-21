<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=95b6f8&height=120&section=header"/>

<h1 align="center">E-commerce</h1>

<div align="center">

![Status](https://img.shields.io/badge/Status-week%203/3-0D1117?style=for-the-badge&labelColor=E04EF6)&nbsp;
![HTML 5](https://img.shields.io/badge/-HTML-0D1117?style=for-the-badge&logo=html5&logoColor=f45430&labelColor=0D1117)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117)&nbsp;
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-0D1117?style=for-the-badge&logo=tailwindcss&logoColor=1572B6&labelColor=0D1117)&nbsp;
![Vue.js](https://img.shields.io/badge/-Vue.js-0D1117?style=for-the-badge&logo=vue.js&labelColor=0D1117)&nbsp;
</div>

## Table of contents

- [Overview](#overview)
  - [Description](#description)
  - [Project Setup](#project-setup)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Description

This project will be divided in three weeks:

- Week 1: 
    - Mobile and Desktop layout;
    - Responsive design;
    - Shopping cart with state management;
    - Product state management;
    - Transitions and animations.
- Week 2:
    - Refactor last week's work;
    - Use LocalStorage for cart data persistance while in guest view;
    - Use [DummyJson API](https://dummyjson.com/docs/products) to feed content to the page;
    - Create sign up and login;
    
- Week 3:
    - Refactor last week's work;
    - Use [Firebase Auth](https://firebase.google.com/products/auth) for user authentication;
    - ~~Use JWT tokens for user auth;~~
    - Use [Firebase Firestore](https://firebase.google.com/products/storage) to persist cart data;
- Week 4:
    - Create user profile page;
    - Within user profile page: 
        - Favorites 
        - Cart
        - Information;
    - Create checkout page.


### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```
### Screenshots

### Links
<a href="https://github.com/natalia-sampaio"><img src="https://img.shields.io/badge/-Gitthub-0D1117?style=for-the-badge&logo=github&labelColor=333&textColor=0D1117"/></a>
<a href="https://e-commerce-lake-eight.vercel.app/"><img src="https://img.shields.io/badge/-Deploy-0D1117?style=for-the-badge&logo=vercel&labelColor=333&textColor=0D1117"/></a>

## My process

### Built with
- Vue.js 3
- TailwindCSS
- Responsive layout
- Mobile first

### What I learned
#### Week 1:
I used Vue's built in component Transitions for the first time to create a better user experience.

Reusable transition for the pages when they are loaded, it is reausable because I abstracted it to component named *SlideDownFade.Vue*:
```html
<script>
import { Transition } from 'vue';
</script>

<template>
    <Transition name="slide-down-fade" appear>
        <slot></slot>
    </Transition>
</template>

<style>
.slide-down-fade-enter-from {
    opacity: 0;
    transform: translateY(-250px);
}

.slide-down-fade-enter-active {
    transition: all 2s ease;
}
</style>
```

Here is *SlideDownFade.Vue* being used:
```html
<template>
    <SlideDownFade>
        <div class="lg:mx-8 lg:flex lg:flex-wrap lg:justify-center">
            <div>
                <ProductCard v-for="product in mensShoes" 
                :key="product.id" 
                :brandName="product.brand"
                :productName="product.title" 
                :finalCost="productsStore.getDiscountedPrice(product.id)"
                :discount="product.discountPercentage" 
                :originalPrice="product.price" 
                :product="product" />
            </div>
        </div>
    </SlideDownFade>
</template>
```
#### Week 2:
I learned how to synchronize data persistence (used localStorage) and state management, and it was very eazy once I had a store with all the logic I needed:
```js
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      toggleCart: false,
      items: useLocalStorage('cart', [])
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
    deleteItem(id) {
      const productToBeDeleted = this.items.findIndex(element => element.product.id === id)
      this.items.splice(productToBeDeleted, 1)
    }
  }
})
```

To consume the DummyJSON API, I decided to abstract the URL's that I needed in the config.js file:

```js
let domain = 'https://dummyjson.com/products/category/'

export const apiDomain = domain;
export const mensShoesUrl = apiDomain + 'mens-shoes';
export const womensShoesUrl = apiDomain + 'womens-shoes';
export const featuredUrl = apiDomain + 'womens-shoes?limit=1';
```
And then the functions that get the JSON objects in the products.js file in the services folder:
```js
import { featuredUrl, mensShoesUrl, womensShoesUrl } from '../config.js';

export async function getMensShoes() {
    const request = mensShoesUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response.products;
}

export async function getWomensShoes() {
    const request = womensShoesUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response.products;
}

export async function getFeaturedShoes() {
    const request = featuredUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response.products;
}

export function getDiscountedPrice(id, products) {
    const product = products.find(element => element.id === id);

    const discountedPrice = product.discountPercentage > 0.0 ? product.price - ((product.price / 100) * product.discountPercentage) : product.price;

    return discountedPrice.toFixed(2);
}

export function getImages(id, products) {
    const product = products.find(element => element.id === id);

    const images = product.images;
    
    return images;
}
```
#### Week 3:

I learned that with Firebase Authentication SDK I don't need to worry about JWT tokens because the library already handles user login state (YAY!). It is also possible to use social login or Federated Identity Providers, that means that I can easily implement login with Google, Facebook, Github and many other providers.

```js
const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {
        store.$patch({
            name: formData.name,
            email: formData.email
        });
        createUserWithEmailAndPassword(getAuth(), formData.email, formData.password)
            .then((data) => {
                router.push('/user-profile')
            })
            .catch((error) => {
                alert(error.message);
            })
    } else {
        animateButton();
        router.push('/sign-up')
    }
}
```

```js
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            router.push('/user-profile')
        })
        .catch((error) => {
            animateButton();
            if(error.code == 'auth/user-not-found') {
                $externalResults.value = { email: 'User not found, please register.' }
            }
            if (error.code == 'auth/wrong-password'){
                $externalResults.value = { email: 'User and/or password are incorrect' }
            }
        });
};
```

At first I wanted to use Firebase Realtime Database for the user data, but then a found out about a more recent solution called Firestore, so I decided to use that to store user information, such as cart, favorites and profile.

### Useful resources
- [Vue.js 3 Animations & Transitions Tutorial](https://www.koderhq.com/tutorial/vue/animation/) - This tutorial from KoderHQ helped me understand the basics of Transitions/TransitionGroups and how they work.
- [John Komarnicki](https://www.youtube.com/@JohnKomarnicki) - John's youtube channel is rich with valuable content and he's a great communicator. I strongly encourage anyone that wants to take their Vue.js development skills to the next level. 
- [Simple Local Storage implementation using Vue 3, Vueuse and Pinia with zero extra lines of code.](https://stephanlangeveld.medium.com/simple-local-storage-implementation-using-vue-3-vueuse-and-pinia-with-zero-extra-lines-of-code-cb9ed2cce42a) - In Stephan Langeveld's blog, he shows a simple way to use localStorage with Pinia.
- [Firebase Auth and Storage](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jUPIes_B8vRjn1_GaplOPQ) - The Net Ninja is one of the best channels por learning new technologies.

## Author

<a href="natalia.srsa@proton.me"><img src="https://img.shields.io/badge/-Email-0D1117?style=for-the-badge&logo=protonmail&labelColor=0D1117&textColor=0D1117"/></a>

<a href="https://www.linkedin.com/in/natalia-srs/"><img src="https://img.shields.io/badge/-LinkedIn-0D1117?style=for-the-badge&logo=linkedin&labelColor=0D1117&textColor=0D1117"/></a>

<a href="https://twitter.com/NataliaSRSA"><img src="https://img.shields.io/badge/-Twitter-0D1117?style=for-the-badge&logo=twitter&labelColor=0D1117&textColor=0D1117"/></a>

## Acknowledgments

My husband [@filipedanielski](https://twitter.com/filipedanielski) who is always supporting and encouraging me.

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=95b6f8&height=100&section=footer"/>