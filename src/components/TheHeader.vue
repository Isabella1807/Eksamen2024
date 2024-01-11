<script setup>
import {useRouter} from 'vue-router';
import {computed, ref} from 'vue';

const props = defineProps(['isAdmin', 'setIsAdmin', 'totalCartAmount']);

const router = useRouter();
const path = computed(() => router.currentRoute);
const adminLogout = () => {
  props.setIsAdmin(false);

  //Reroute til forsiden på logud, medmindre de er på shop
  if (path.value.value.path !== "/shop") {
    router.push('/');
  }
}

const burgerIsMenuClicked = ref(false);
const burgerMenuClick = () => {
  burgerIsMenuClicked.value = !burgerIsMenuClicked.value;
}
</script>

<template>
  <header id="header">
    <div class="headerHelperContainer">
      <div class="headerItemsContainer">

        <div class="burgerContainerIcon" @click="burgerMenuClick">
          <i class="fa fa-bars"></i>
        </div>

        <div class="headerLogo">
          <router-link to="/" class="headerLogoRouter">
            <img src="../assets/MortensLogo.png" alt="Mortens Chokolade Logo">
          </router-link>
        </div>
        <div class="navHelperContainer">
          <nav class="headerNav">
            <p>
              <router-link to="/" class="routerlink">Home</router-link>
            </p>
            <p>
              <router-link to="/shop" class="routerlink">Shop</router-link>
            </p>
            <p class="routerlink">Kurser & events</p>
            <p class="routerlink">Om Mortens Chokolade</p>
            <p class="routerlink">Kontakt</p>
            <p>
              <router-link to="/admin" class="routerlink" v-if="props.isAdmin">admin</router-link>
            </p>
            <p class="routerlink" v-if="props.isAdmin" @click="adminLogout">log ud</p>
          </nav>
        </div>
        <div class="headerCartIcon">
          <img src="../assets/cart.png" alt="Shopping Cart">
          <p>{{ props.totalCartAmount }}</p>
        </div>
      </div>

      <div class="burgerMenu" v-if="burgerIsMenuClicked">
        <div class="burgerMenuItems">
          <p>
            <router-link to="/" class="routerlink">home</router-link>
          </p>
          <p>
            <router-link to="/shop" class="routerlink">shop</router-link>
          </p>
          <p>
            <p class="routerlink"> Kurser & events</p>
          </p>
          <p>
            <p class="routerlink"> Om Mortens Chokolade</p>
          </p>
          <p>
            <p class="routerlink"> Kontakt</p>
          </p>

          <p>
            <router-link to="/admin" class="routerlink" v-if="props.isAdmin">admin</router-link>
          </p>
          <p class="routerlink" v-if="props.isAdmin" @click="adminLogout">log ud</p>
        </div>
      </div>

    </div>
  </header>

</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}

.headerHelperContainer {
  width: 100%;
}

.headerItemsContainer {
  display: flex;
  align-items: center;
  background-color: rgba(59, 51, 44, 0.77);
  height: 140px;
}

.headerLogo {
  margin: 40px;
}

.headerLogo img {
  width: 180px;
  height: 80px;
}

.navHelperContainer {
  width: 100%;
  padding: 0 20px;
}

.headerNav {
  display: flex;
}

.headerNav p {
  font-size: 25px;
  margin: 0 20px;
}

.routerlink {
  color: #CBCBCB;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.routerlink:after {
  content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 2px solid;
  margin-top: 10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
}

.router-link-active:after,
.routerlink:hover:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.routerlink:hover {
  cursor: pointer;
}

.headerNav p:hover:after {
  width: 100%;
  left: 0;
}

.headerCartIcon {
  display: flex;
  height: max-content;
  margin: 40px;
}

.headerCartIcon p {
  color: white;
}

.headerCartIcon img {
  max-height: 50px;
}

.headerCartIcon:hover {
  cursor: pointer;
}

.burgerContainerIcon {
  display: none;
  color: white;
  font-size: 45px;
  margin: 40px;
}

.burgerContainerIcon:hover {
  cursor: pointer;
}

.burgerMenu {
  display: none;
}

.burgerMenuItems {
  background-color: #333333;
  padding: 20px;
  font-size: 25px;
}

.burgerMenuItems p:not(:first-child) {
  margin-top: 20px;
}

@media only screen and (max-width: 1070px) {
  .burgerMenu {
    display: block;
  }

  .navHelperContainer {
    display: none;
  }

  .headerItemsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .burgerContainerIcon {
    display: block;
  }
}

@media only screen and (max-width: 470px) {
  .headerItemsContainer {
    height: 90px;
  }

  .headerLogo {
    margin: 20px 20px 5px 20px;
  }

  .headerLogo img {
    width: 140px;
    height: 60px;
  }

  .headerCartIcon {
    margin: 20px 20px 5px 20px;
  }

  .headerCartIcon img {
    max-height: 40px;
  }

  .burgerContainerIcon {
    margin: 20px 20px 5px 20px;
  }
}
</style>