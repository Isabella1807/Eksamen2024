<script setup>
import {onMounted, ref} from "vue";
import productDB from "../../database/products";

const props = defineProps(['setCategory', 'selectedCategory']);

let categories = ref([]);

onMounted(async () => {
  const allProducts = await productDB.getAllProducts();
  categories.value = getUniqueCategories(allProducts);
});

const getUniqueCategories = (products) => {
  const uniqueCategories = new Set();
  products.forEach((product) => {
    uniqueCategories.add(product.category);
  });
  return Array.from(uniqueCategories);
};
</script>

<template>
  <div id="ShopCategoringContainer">
    <div class="ShopCategoringItem" :class="{'active': props.selectedCategory === ''}">
      <h2 @click="() => props.setCategory('')">Alle produkter</h2>
    </div>
    <div class="ShopCategoringItem" :class="{'active': props.selectedCategory === category}"
         v-for="category in categories" :key="category"
         @click="() => props.setCategory(category)">
      <h2>{{ category }}</h2>
    </div>
  </div>
</template>

<style scoped>
#ShopCategoringContainer {
  display: flex;
  justify-content: space-between;
}

.ShopCategoringItem {
  border: 2px solid #707070;
  background-color: white;
  color: #707070;
  border-radius: 5px;
  padding: 10px 20px;
  white-space: nowrap;
  margin: 0 5px;
  transition: 0.4s;
}
.ShopCategoringItem h2{
  font-weight: 500;
}

.ShopCategoringItem:hover {
  cursor: pointer;
  background-color: #707070;
  color: white;
  animation: ease-in;
}

.ShopCategoringItem.active {
  background-color: #707070;
  color: white;
  transition: all 0.3s ease-in;
}

@media only screen and (max-width: 600px) {
  .ShopCategoringItem{
    padding: 5px 10px;
  }
}
</style>