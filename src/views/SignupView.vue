<script setup>
import SlideDownFade from '../components/SlideDownFade.vue';
import FormItem from '../components/FormItem.vue';
import BaseInput from '../components/BaseInput.vue';
import Button from '../components/Button.vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const formData = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
});

const rules = computed(() => {
    return {
        name: {
            required,
            minLength: minLength(3)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(8)
        },
        confirmPassword: {
            required,
            sameAs: sameAs(formData.password)
        }
    }
});

const v$ = useVuelidate(rules, formData);

const router = useRouter();
const warn = ref(false);

const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {
        store.$patch({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword
        })
        router.push('/')
    } else {
        warn.value = true;
        setTimeout(() => {
            warn.value = false
        }, 1500)
        router.push('/')
    }
}
</script>

<template>
    <SlideDownFade>
        <div class="border-2 border-pink-600 rounded-br-3xl grid grid-cols-2 p-6 xl:mx-48 mb-20 h-[65vh]">
            <div class="self-center text-center mx-10">                
                <h2 class="text-2xl mb-5">Sign Up</h2>
                <FormItem>
                    <template #label>Name</template>
                    <template #error v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</template>
                    <BaseInput type="text" placeholder="e.g. Casimiro Silva" aria-label="name input" v-model="formData.name" />
                </FormItem>
                <FormItem>
                    <template #label>E-mail</template>
                    <template #error v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</template>
                    <BaseInput type="text" placeholder="e.g. casimiro.silva@email.com" aria-label="email input" v-model="formData.email" />
                </FormItem>
                <FormItem>
                    <template #label>Password</template>
                    <template #error v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</template>
                    <BaseInput type="text" placeholder="" aria-label="password input" v-model="formData.password" />
                </FormItem>
                <FormItem>
                    <template #label>Confirm Password</template>
                    <template #error v-for="error in v$.confirmPassword.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</template>
                    <BaseInput type="text" placeholder="" aria-label="confirm password input" v-model="formData.confirmPassword" />
                </FormItem>
                <Button @click="submitForm" :class="{ shake: warn }" name="Submit" class="mt-5"/>
            </div>
            <div class="self-center">
                <img src="../assets/images/image-product-1.jpg" alt="" class="rounded-tl-3xl rounded-br-3xl">
            </div>
        </div>
    </SlideDownFade>    
</template>

<style scoped> .shake {
     animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
     transform: translate3d(0, 0, 0);
 }

 @keyframes shake {

     10%,
     90% {
         transform: translate3d(-1px, 0, 0);
     }

     20%,
     80% {
         transform: translate3d(2px, 0, 0);
     }

     30%,
     50%,
     70% {
         transform: translate3d(-4px, 0, 0);
     }

     40%,
     60% {
         transform: translate3d(4px, 0, 0);
     }
 }</style>