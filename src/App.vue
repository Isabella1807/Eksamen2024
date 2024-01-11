<script setup>

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import {computed } from "vue";
import {useCart} from "@/components/ShopComponents/CartComposable";
import {useStore} from 'vuex'

const {totalCartAmount, addItemToCart} = useCart();
const store = useStore();
const setIsAdmin = (newAdminState) => {
  /*isAdmin.value = newAdminState;*/
}

const testadmin = computed(() => store.getters['user/isAdmin']);

</script>

<template>
  <TheHeader :isAdmin="testadmin" :setIsAdmin="setIsAdmin" :totalCartAmount="totalCartAmount"/>

  <main>
    <RouterView :isAdmin="testadmin" :setIsAdmin="setIsAdmin" :addToCart="addItemToCart"/>
  </main>

  <TheFooter />
</template>

<style scoped>
</style>

