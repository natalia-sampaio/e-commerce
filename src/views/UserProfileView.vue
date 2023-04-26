<script setup>
import { useUserStore } from '../stores/user';
import IconCamera from '../components/icons/IconCamera.vue';
import FormItem from '../components/FormItem.vue';
import BaseInput from '../components/BaseInput.vue';
import Button from '../components/Button.vue';
import IconClose from '../components/icons/IconClose.vue';
import { getAuth, deleteUser } from "firebase/auth";
import { useRouter } from 'vue-router';

const store = useUserStore();

const user = getAuth().currentUser;
const router = useRouter();

const deleteAccount = () => {
    deleteUser(user)
        .then(() => {
            alert('Success! This account was deleted');
            router.push('/');
        })
        .catch((error) => {
            alert(error.message);
        })
}

</script>

<template>
    <div class="mx-48">
        <div class="relative max-w-fit mb-4">
            <img src="../assets/images/image-avatar.png" alt="">
            <IconCamera class="absolute right-0 bottom-0 w-7" />
        </div>
        <h2 class="text-2xl">Welcome, <span class="font-normal">{{ store.name }}</span>.</h2>
        <div class="grid grid-cols-2">
            <div class="font-normal m-10 border border-blue-very-dark p-5 grid grid-rows-3 items-center">
                <h3 class="text-xl pb-2 border-b mb-2">This is your profile information:</h3>
                
            </div>
            <div class="font-normal m-10 border border-blue-very-dark p-5">

            </div>
        </div>
        <Button @click="deleteAccount()" name="Delete account">
            <IconClose :fill="'#fff'" />
        </Button>
    </div>
</template>