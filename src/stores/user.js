import { defineStore } from 'pinia';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../main.js';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: '',
            email: '',
            uid: '',
            profilePicture: '',
            isLoggedIn: false
        }
    },
    getters: {
        async getUserInformation() {
            if (this.isLoggedIn) {
                const docRef = doc(db, this.uid, 'user');
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()){
                    this.name = docSnap.data().name;
                    this.email = docSnap.data().email;
                }
            }
        }
    },
    actions: {
        async addToFirestore() {
            const docRef = doc(db, this.uid, 'user');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists() && docSnap.data() != null) {
                await updateDoc(docRef, {
                    name: this.name,
                    email: this.email
                });
            } else {
                await setDoc(docRef, {
                    name: this.name,
                    email: this.email
                });
            }
        }
    }
})
