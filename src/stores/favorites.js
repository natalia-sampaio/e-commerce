import { defineStore } from 'pinia';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../main.js';

export const useFavoritesStore = defineStore('favorites', {
    state: () => {
        return {
            toggleFavorites: false,
            items: [],
            isLoggedIn: false,
            uid: ''
        }
    },
    getters: {
        favoriteItems() {
            return this.items.reduce((acc, item) => acc + item.amount, 0);
        },
        async getUserFavorites() {
            if (this.isLoggedIn) {
                const docRef = doc(db, this.uid, 'favorites');
                const docSnap = await getDoc(docRef);

                if (docSnap.exists() && docSnap.data().items != null) {
                    this.items = docSnap.data().items;
                    return
                }
                this.items = [];
                return
            }
        }
    },
    actions: {
        addToFavorites(product) {
            const existingProduct = this.items.find(element => element.product.id === product.id);

            if (existingProduct) {
                existingProduct.amount = existingProduct.amount + 1;
                if (this.isLoggedIn) {
                    this.updateFirestore(this.items);
                }
            } else {
                this.items.push({ product, amount: 1 });
                if (this.isLoggedIn) {
                    this.addToFirestore(product);
                }
            }
        },
        deleteItem(id) {
            const productToBeDeleted = this.items.findIndex(element => element.product.id === id);

            this.items.splice(productToBeDeleted, 1);

            if (this.isLoggedIn) {
                this.updateFirestore(this.items);
            }
        },
        async addToFirestore(product) {
            const docRef = doc(db, this.uid, 'favorites');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists() && docSnap.data().items != null) {
                await updateDoc(docRef, {
                    items: arrayUnion({
                        product,
                        amount: 1
                    })
                });
            } else {
                await setDoc(docRef, {
                    items: [
                        {
                            product,
                            amount: 1
                        }
                    ]
                });
            }
        },
        async updateFirestore(items) {
            const docRef = doc(db, this.uid, 'favorites');
            await updateDoc(docRef, { items })
        }
    }
})
