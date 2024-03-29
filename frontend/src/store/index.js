import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [],
  },
  mutations: {
    updateCart(state, payload) {
      state.cartList.push(payload);
    },
  },
  actions: {},
  modules: {},
});
