<!-- App.vue -->
<template>
  <NavBar />
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
// Import navbar
import NavBar from "@/views/navBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
