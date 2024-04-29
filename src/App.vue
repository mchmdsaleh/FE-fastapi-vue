<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div id="app">
    <NavBar />
    <div class="mx-auto pt-[63px]">
      <router-view/>
    </div>
  </div>
</template>

<style>
</style>
