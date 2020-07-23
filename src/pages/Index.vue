<template>
  <div>
    <h1>Test</h1>
    <div v-if="loaded">
      <p>{{ stores }}</p>
    </div>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  name: "PageIndex",
  computed: {
    stores() {
      return store.state.stores;
    },
    loaded() {
      return store.state.loaded;
    }
  },
  created() {
    store.dispatch("fetchStores");
  }
};
</script>
