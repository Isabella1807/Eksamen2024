<script setup>
import { ref } from 'vue';

const videoPath = "../assets/images/banner.mp4";

const videoElement = ref();

// Autoplay video when it's loaded
const autoplayVideo = () => {
    if (videoElement.value) {
        videoElement.value.play().catch(error => {
            console.error("Error playing video:", error);
        });
    }
};
</script>

<template>
    <video class="bannerVideo" controls ref="videoElement" @loadeddata="autoplayVideo" autoplay muted loop>
        <source src="../assets/images/banner.mp4" type="video/mp4">
    </video>
</template>

<style>
.bannerVideo {
    width: 100%;
}
</style>
