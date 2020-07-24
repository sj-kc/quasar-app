<template>
  <div>
    <div v-if="!loaded">{{ this.$q.loading.show() }}</div>
    <q-layout v-if="loaded">
      {{ this.$q.loading.hide() }}
      <q-page-container class="row justify-center">
        <h1 class="col-12 col-2">The Den Store</h1>
        <div
          v-for="store in stores"
          :key="store.id"
          class="col-12 col-md-3 q-ma-md"
        >
          <q-card class="my-card cursor-pointer">
            <q-card-section @click="() => getInfo(store)">
              <p>{{ store.name }}</p>
              <p>{{ store.storeType }}</p>
            </q-card-section>
          </q-card>
        </div>
      </q-page-container>
    </q-layout>
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
        message: `<p>Adress: ${address}</p>
        <p>City: ${city}</p> 
        <p>Email: ${email.length ? email : "No email"}</p> 
        <p> Phone: ${phone}</p>`,
        html: true
      });
    }
  },

  created() {
    store.dispatch("fetchStores");
  }
};
</script>
