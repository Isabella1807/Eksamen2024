<script setup>
import {
  onMounted,
  ref
} from 'vue';
import footer from '../database/footer';


let footerInfo = ref([]);

onMounted(async () => {
  footerInfo.value = await footer.getAllInformation();
});

</script>

<template>
  <div class="footerContainer">
    <img class="logoImage" src="../assets/MortensLogo.png" alt="">
    <ul>
      <li v-for="info in footerInfo">
        <div class="footerTitle">{{ info.footerTitle }} </div> <br>
        <div class="footerHours"> {{ info.footerHours }} </div><br>
        <div class="kontakt">{{ info.phone }} </div>
      </li>
    </ul>
  </div>
</template>

<style>
.footerContainer {
  background-color: #3B332C;
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.logoImage {
  width: 350px;
}

.footerHours {
  width: 200px;
  color: white;
}

.footerTitle {
  color: white;
}

.kontakt {
  color: white;
}
</style>
