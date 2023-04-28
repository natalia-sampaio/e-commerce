import { defineStore } from 'pinia';
import { deleteField, doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../main.js';

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      toggleCart: false,
      items: [],
      isLoggedIn: false,
      uid: ''
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
        existingProduct.amount = existingProduct.amount+1;
        if(this.isLoggedIn) {
          this.updateFirestore(product);
        }
      } else {
        this.items.push({product, amount: 1});
        if(this.isLoggedIn) {
          this.addToFirestore(product);
        }
      }
    },
    async addToFirestore(product) {
      const docRef = doc(db, this.uid, 'cart');
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        await updateDoc(docRef, {
          [`item: ${product.id}`]: {
            product, 
            amount: 1
          }
        });
      } else {
        await setDoc(docRef, {
          [`item: ${product.id}`]: {
            product, 
            amount: 1
          }
        });
      }
    },
    async updateFirestore(product) {
      const docRef = doc(db, this.uid, 'cart');

      await updateDoc(docRef, {
        [`item: ${product.id}.amount`]: increment(1)
      });
    },
    deleteItem(id) {
      const productToBeDeleted = this.items.findIndex(element => element.product.id === id);

      this.items.splice(productToBeDeleted, 1);

      if(this.isLoggedIn){
        this.deleteFromFirestore(id);
      }
    },
    async deleteFromFirestore(id) {
      const docRef = doc(db, this.uid, 'cart');

      await updateDoc(docRef, {
        [`item: ${id}`]: deleteField()
      });
    }
  }
})
