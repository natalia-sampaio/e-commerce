import { defineStore } from 'pinia';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../main.js';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
                const storage = getStorage();
                const storageRef = ref(storage, this.uid);
                this.profilePicture = await getDownloadURL(storageRef);
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
                    email: this.email,
                    profilePicture: this.profilePicture
                });
            } else {
                await setDoc(docRef, {
                    name: this.name,
                    email: this.email,
                    profilePicture: this.profilePicture
                });
            }
        },
        async updateUsername() {
            const docRef = doc(db, this.uid, 'user');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                await updateDoc(docRef, {
                    name: this.name,
                });
            }
        }
    }
})
