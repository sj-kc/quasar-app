<template>
  <main class="card">
    <div v-if="!loaded">{{ this.$q.loading.show() }}</div>
    <section v-if="loaded" class="card__section">
      {{ this.$q.loading.hide() }}
      <div v-for="store in stores" :key="store.id" class="card__container">
        <div @click="() => getInfo(store)" class="card__body">
          <p>{{ store.name }}</p>
          <p>{{ store.storeType }}</p>
        </div>
      </div>
    </section>
  </main>
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
