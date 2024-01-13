<script setup>
import {useStore} from "vuex";

const store = useStore();


const addToCart = () => {
  store.dispatch('cart/addItemToCart', {productID: props.id, amount: 1});
}

const props = defineProps(['title', 'frontImage', 'price', 'id', 'editProduct', 'isAdmin'])

const deleteProduct = () => {
  if (confirm('Are you sure you want to delete?')) {
    store.dispatch('products/deleteProduct', {productID: props.id})
  }
}
</script>

<template>
  <div class="shopProduct">
    <div class="shopProductImageContainer">
      <img :src="props.frontImage" alt="Image Tekst">
    </div>
    <div class="productInformationContainer">
      <div>
        <p>{{ props.title }}</p>
        <p>{{ props.price }} DKK</p>
      </div>
      <div class="productAddContainer">
        <button class="productAddProductButton" v-if="!props.isAdmin" @click="() => addToCart()">
          <img src="../../assets/images/add.png" alt="tilføj">
        </button>
        <div class="adminShopItemsContainer">
          <button class="productAddProductButton" v-if="props.isAdmin" @click="() => deleteProduct()">
            <img src="../../assets/images/trash.png" alt="slet">
          </button>
          <button class="productAddProductButton" v-if="props.isAdmin" @click="() => props.editProduct(props.id)">
            <img src="../../assets/images/edit.png" alt="ændre">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopProduct {
}

.shopProductImageContainer {
  /*Fixed the random gap between image and textbox..*/
  margin-bottom: -4px;
}

.shopProductImageContainer img {
  object-fit: cover;
  width: 100%;
  height: 250px;
}

.productInformationContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
}

.productInformationContainer p {
  font-size: 20px;
}

.productAddContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.productAddProductButton {
  border: none;
  background-color: transparent;
}

.productAddContainer:hover {
  cursor: pointer;
}

.productAddProductButton:hover {
  cursor: pointer;
}

.adminShopItemsContainer {
  display: flex;
}

.adminShopItemsContainer button img {
  margin: 5px 10px;
}
</style>
