<template>
  <div>
    <h1>Test</h1>
    <div v-if="loaded">
      <div v-for="store in stores" :key="store.id">
        <q-card class="my-card">
          <q-card-section @click="() => getInfo(store)">
            <p>{{ store.name }}</p>
            <p>{{ store.storeType }}</p>
          </q-card-section>
        </q-card>
      </div>
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

  methods: {
    getInfo(store) {
      const { address, city, storeEmail: email, storePhone: phone } = store;

      this.$q.dialog({
        title: store.city,
        message: `<p>Adress: ${address}</p> <p>City: ${city}</p> <p>Email: ${email}</p> <p> Phone: ${phone}</p>`,
        html: true
      });
    }
  },

  created() {
    store.dispatch("fetchStores");
  }
};
</script>
