<script setup>
import { ref } from 'vue';
import footer from '../database/footer';

const addNewInformtaionFooter = ref(false);

const formTitleFooter = ref('');
const formHours = ref('');
const formPhone = ref('');

const infoIsMissing = ref(false);

const showNewInformation = () => {
  addNewInformtaionFooter.value = true;
};

const hideNewInformation = () => {
  addNewInformtaionFooter.value = false;
  formTitleFooter.value = '';
  formHours.value = '';
  formPhone.value = '';
  infoIsMissing.value = false;
}


const submitNewInformation = () => {
  if (
    formTitleFooter.value == ''
    || formHours.value == ''
    || formPhone.value == '') {
    infoIsMissing.value = true;
    return;
  }

  footer.addNewInformation(
    formTitleFooter.value,
    formHours.value,
    formPhone.value,
  );

  hideNewInformation();
};

</script>

<template>
  <div class="headerSpacer"></div>

  <footer>
    <div>
      <div id="AddInformation" v-if="addNewInformtaionFooter">
        <form v-on:submit.prevent="">

          <label for="footerTitle">footerTitle:</label><br>
          <input type="text" id="footer-title" placeholder="Title" v-model="formTitleFooter"><br><br>

          <label for="footerHours">footerHours:</label><br>
          <input type="text" id="footer-hours" placeholder="åbningstider" v-model="formHours"><br><br>

          <label for="phone">phone:</label><br>
          <input type="text" id="footer-phone" placeholder="telefon" v-model="formPhone"><br><br>

          <button type="submit" @click="submitNewInformation" class="infoWindowButton">Tilføj</button>
          <button @click="hideNewInformation" class="infoWindowButton">Luk</button>
        </form>

      </div>
      <button @click="showNewInformation" class="addInfoButton" v-if="!addNewInformtaionFooter">Tilføj footer
        info</button>
    </div>
  </footer>
</template>

<style scoped>
.headerSpacer{
    height: 140px;
    background-color: deeppink;
}

</style>