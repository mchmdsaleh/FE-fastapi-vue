<script setup>
import { ref } from 'vue';
import axios from 'axios';

const msg = ref('');

async function getMessage() {
  try {
    const response = await axios.get('/');
    msg.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

getMessage();
</script>

<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>