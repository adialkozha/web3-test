<template>
  <div id="app">
    <GetTransfers />
  </div>
</template>

<script>
import GetTransfers from './components/GetTransfers.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    GetTransfers,
  },
};
</script>

<style>
/* Добавьте здесь любые глобальные стили */
</style>
