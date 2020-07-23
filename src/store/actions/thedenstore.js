import http from "../../http";

export const setLoaded = ({ commit }) => {
  commit("SET_LOADED", true);
};

export const fetchStores = ({ commit }) => {
  http
    .get()
    .then(({ data }) => {
      commit("SET_LOADED", true);
      commit("SET_DEN_STORE", data);
    })
    .catch(error => {
      commit("SET_ERROR", error);
    });
};
