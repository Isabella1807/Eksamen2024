<script setup>

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import {useCart} from "@/components/ShopComponents/CartComposable";

const {totalCartAmount, addItemToCart} = useCart();

</script>

<template>
  <TheHeader :totalCartAmount="totalCartAmount"/>

  <main>
    <RouterView :addToCart="addItemToCart"/>
  </main>

  <TheFooter />
</template>

<style scoped>
</style>

