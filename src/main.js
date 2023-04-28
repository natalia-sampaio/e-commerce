import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8N1ePfbQItb5k5m2B_7xkToAKfGGbWzM",
  authDomain: "e-commerce-96ad7.firebaseapp.com",
  projectId: "e-commerce-96ad7",
  storageBucket: "e-commerce-96ad7.appspot.com",
  messagingSenderId: "641521179925",
  appId: "1:641521179925:web:c8653b24f4117d49bddd1c"
};

const db = getFirestore(initializeApp(firebaseConfig));

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
