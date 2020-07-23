import vuex from "vuex";
import axios from "axios";
import Vue from "vue";
import { fetchStores, setLoaded } from "./actions/thedenstore";
import { SET_DEN_STORE, SET_LOADED } from "./mutations/thedenstore";

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    stores: [],
    error: "",
    loaded: false
  },
  actions: {
    fetchStores,
    setLoaded
  },
  mutations: {
    SET_DEN_STORE,
    SET_LOADED
  }
});
