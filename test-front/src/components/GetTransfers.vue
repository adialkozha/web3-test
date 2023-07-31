<template>
  <div class="transfers">
    <h1>Transfer Events</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <div v-for="transfer in transfers" :key="transfer.transactionHash">
        <h2>Block Number: {{ transfer.blockNumber }}</h2>
        <p>Transaction Hash: {{ transfer.transactionHash }}</p>
      </div>
    </div>
    <button @click="getTransfers">Render</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      transfers: []
    };
  },
  methods: {
    async getTransfers() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/transfers');
        console.log(response);
        this.transfers = response.data.transfers;
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.loading = false;
      }
    },
  }
};
</script>

<style scoped>
/* Добавьте здесь любые стили */
</style>
