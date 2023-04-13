<script setup>
import FormItem from '../components/FormItem.vue';
import BaseInput from '../components/BaseInput.vue';
import IconEye from '../components/icons/IconEye.vue';
import IconClosedEye from '../components/icons/IconClosedEye.vue';
import Button from '../components/Button.vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from '../stores/user.js';
import IconLogo from '../components/icons/IconLogo.vue';

const store = useUserStore();

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
            email: formData.email
        })
        router.push('/user-profile')
    } else {
        warn.value = true;
        setTimeout(() => {
            warn.value = false
        }, 1500)
        router.push('/sign-up')
    }
}

const showPassword = ref(false);

const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
}
</script>

<template>
        <div class="
            border-2 border-pink-600 
            rounded-tl-3xl rounded-br-3xl 
            grid xl:grid-cols-2 
            p-6 
            mt-10
            mx-4 mobile:mx-auto xl:mx-48 mb-20
            max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-none">
            <div class="self-center text-center mx-10">                
                <h2 class="text-2xl font-normal mb-5 flex items-center justify-center">Sign up to <IconLogo class="mx-2" /></h2>
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
                    <div class="flex items-center">
                        <BaseInput :type="!showPassword ? 'password' : 'text'" placeholder="" aria-label="password input" v-model="formData.password" class="w-full" />
                        <button @click.prevent="toggleShowPassword">
                            <IconEye v-if="!showPassword" :width="'24px'" class="-ml-10" />
                            <IconClosedEye v-else :width="'24px'" class="-ml-10" />
                        </button>
                    </div>
                </FormItem>
                <FormItem>
                    <template #label>Confirm Password</template>
                    <template #error v-for="error in v$.confirmPassword.$errors" :key="error.$uid" class="text-red-600">{{ error.$message }}</template>
                    <div class="flex items-center">
                        <BaseInput :type="!showPassword ? 'password' : 'text'"  placeholder="" aria-label="confirmPassword input" v-model="formData.confirmPassword" class="w-full" />
                        <button @click.prevent="toggleShowPassword">
                            <IconEye v-if="!showPassword" :width="'24px'" class="-ml-10" />
                            <IconClosedEye v-else :width="'24px'" class="-ml-10" />
                        </button>
                    </div>
                </FormItem>
                <Button @click="submitForm" :class="{ shake: warn }" name="Submit" class="mt-5"/>
            </div>
            <div class="self-center hidden xl:block">
                <img src="../assets/images/image-product-1.jpg" alt="" class="rounded-tl-3xl rounded-br-3xl">
            </div>
        </div> 
</template>