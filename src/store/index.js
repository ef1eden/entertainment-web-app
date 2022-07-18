import { createStore } from 'vuex'
import API from "@/services/api";

export default createStore({
  state: {
    videos: [],
  },
  getters: {
  },
  mutations: {
    SET_VIDEOS(state, payload) {
      state.videos = payload;
    }
  },
  actions: {
    async LOAD_VIDEOS({ commit }) {
      let response = await API().get('/videos');
      commit('SET_VIDEOS', response.data);
    }
  },
  modules: {
  }
})
