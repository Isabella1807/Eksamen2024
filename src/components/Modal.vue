<script setup>
const props = defineProps(['closeFunction']);
</script>

<template>
    <div v-if="true" class="overlay" @click="closeFunction"></div>
    <div class="modal">
      <slot></slot>
    </div>
</template>

<style scoped>

.modal {
  background: white;
  color: #333;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 30px;
  z-index: 20001;

  /*vh height in proportion to view port*/
  transform: translate(-50%, -50%);
  width: clamp(320px, 50vw, 1000px);
  /*  height: clamp(200px, 50vh, 800px);*/
}

.overlay{
  background-color: rgba(59, 59, 59, 0.8);
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20000;
}
</style>