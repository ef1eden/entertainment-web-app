import { createStore } from 'vuex'
import API from "@/services/api";

export default createStore({
  state: {
    videos: [],
    searchValue: null,
    showLoading: false,
  },
  mutations: {
    SET_VIDEOS(state, payload) {
      state.videos = payload;
    },
    GET_SEARCH_VALUE(state, payload) {
      state.searchValue = payload;
      state.videos.filter(i => i.title.toLowerCase().includes(state.searchValue));
    },
    REMOVE_SEARCH_VALUE(state) {
      state.searchValue = null;
    },
    TOGGLE_LOADING(state) {
      state.showLoading = !state.showLoading;
    },
    TOGGLE_BOOKMARK(state, payload) {
      const item = state.videos.find(i => i.id === payload);
      item.isBookmarked = !item.isBookmarked;
    }
  },
  actions: {
    async LOAD_VIDEOS({ commit }) {
      commit('TOGGLE_LOADING');
      let response = await API().get('/v1/669a4477-cab6-40f4-be28-de19929374a0');
      commit('SET_VIDEOS', response.data);
      commit('TOGGLE_LOADING');
    },
  },
  modules: {
  }
})
