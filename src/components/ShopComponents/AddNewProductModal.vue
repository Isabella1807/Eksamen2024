<script setup>
import {ref, computed} from 'vue';
import Modal from "@/components/Modal.vue";
import productDB from "@/database/products";
import {useImageUpload} from "@/components/imageUpload";

const {handleFileUpload, imageUrl} = useImageUpload();

const formTitle = ref('');
const formDescription = ref('');
const formPrice = ref('');
const formCategory = ref('');
const dataIsMissing = ref(false);

const showAddProductWindow = () => {
  isEditing.value = false;
  addProductModalVisible.value = true;
};

const hideAddProductWindow = () => {
  formTitle.value = '';
  imageUrl.value = '';
  formDescription.value = '';
  formPrice.value = '';
  formCategory.value = '';
  dataIsMissing.value = false;
  addProductModalVisible.value = false;
}

// TJEK OM ALLE VÆRDIER ER SAT. IKKE CREATE HVIS NOGET MANGLER

const submitNewProductForm = () => {
  if (
      formTitle.value === ''
      || formDescription.value === ''
      || formPrice.value === ''
      || formCategory.value === '') {
    dataIsMissing.value = true;
    return;
  }

  //SUPER VIGTIGT DE ER I RIGTIG RÆKKEFØLGE!!!
  productDB.addNewProduct(
      formTitle.value,
      imageUrl.value,
      formDescription.value,
      formPrice.value,
      formCategory.value
  );

  hideAddProductWindow();
}

const addProductModalVisible = ref(false);

const isEditing = ref(false);
const editingProductId = ref('');
const openEditProductModal = (product) => {
  isEditing.value = true;
  editingProductId.value = product.id;
  formTitle.value = product.title;
  formDescription.value = product.description;
  imageUrl.value = product.frontImage;
  formPrice.value = product.price;
  formCategory.value = product.category;
  addProductModalVisible.value = true;
}
defineExpose({
  openEditProductModal
});

const modalTitle = computed(() => {
  return isEditing.value ? "Ændre produkt" : 'Tilføj nyt produkt';
});

const submitChangedProductForm = async () => {
  await productDB.editProduct(
      editingProductId.value,
      {
        title: formTitle.value,
        description: formDescription.value,
        frontImage: imageUrl.value,
        price: formPrice.value,
        category: formCategory.value,
      }
  )
  hideAddProductWindow();
}

</script>

<template>
  <div>
    <button @click="showAddProductWindow" class="addProductButton">
      <img src="../../assets/images/add.png" alt="tilføj nyt produkt">
    </button>

    <Modal v-if="addProductModalVisible" :closeFunction="hideAddProductWindow">
      <div class="modalHeaderContainer">
        <h1 class="modalTitle">{{ modalTitle }}</h1>
        <button @click="hideAddProductWindow">
          <img src="../../assets/images/close.png" alt="luk">
        </button>
      </div>

      <div id="addProductWindow">

        <form v-on:submit.prevent="">
          <div class="addProductContainer">
            <div class="addProductAddImageContainer" :style="`background-image: url(${imageUrl})`">
              <input type="file" @change="handleFileUpload">
            </div>
            <div class="rightSectionItems">
              <div class="addProductInputContainer">
                <input type="text" id="title" placeholder="Title" v-model="formTitle">
                <input type="number" id="price" placeholder="price" v-model="formPrice">
                <input type="text" id="category" placeholder="category" v-model="formCategory">
                <textarea id="description" placeholder="description" v-model="formDescription"></textarea>
              </div>
            </div>
          </div>
          <div class="addProductModalButtonsContainer">
            <button @click="hideAddProductWindow" class="productWindowButton">Annuller</button>
            <button type="submit" v-if="!isEditing" @click="submitNewProductForm" class="productWindowButton">Tilføj
              produkt
            </button>
            <button type="submit" v-if="isEditing" @click="submitChangedProductForm" class="productWindowButton">Ændre
              produkt
            </button>
          </div>
          <div v-if="dataIsMissing" class="inputIsMissing">
            <p class="missingDataText">Alle felter ikke udfyldt</p>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<style scoped>
.modalHeaderContainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.modalHeaderContainer button {
  border: none;
  background-color: transparent;
}

.modalHeaderContainer button:hover {
  cursor: pointer;
}

#addProductWindow {
  /*border: solid blue 2px;*/
}

.addProductContainer {
  /*border: solid pink 2px;*/
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.addProductButton {
  width: 100%;
  height: 100%;
  padding: 100px;
  border: none;
  background-color: white;
  transition: 0.3s;
}

.addProductButton:hover {
  cursor: pointer;
  background-color: #d4d4d4;
}

.addProductAddImageContainer {
  background-size: cover;
  background-position: center center;
  border: solid grey 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rightSectionItems {
  /*border: solid blue 2px;*/
}

.addProductAddImageContainer input {
  font-size: 25px;
  border: solid grey 2px;
  width: 75%;
}

.addProductAddImageContainer input::placeholder {
  text-align: center;
}

.addProductInputContainer {
  /*border: solid green 2px;*/
  display: grid;
  gap: 30px;
}

.addProductInputContainer input, textarea {
  width: 100%;
  font-size: 25px;
  padding: 5px;
  border: solid grey 2px;
}

.addProductModalButtonsContainer {
  /*border: solid deeppink 2px;*/
  display: flex;
  justify-content: right;
  margin-top: 20px;
}

.addProductModalButtonsContainer button {
  font-size: 25px;
  padding: 10px 45px;
  margin-left: 20px;
}

.inputIsMissing {
  display: flex;
  justify-content: right;
  color: red;
  font-size: 20px;
}

.productWindowButton:hover {
  cursor: pointer;
}
</style>