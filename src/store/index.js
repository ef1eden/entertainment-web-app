import { createStore } from 'vuex'
import API from "@/services/api";

export default createStore({
  state: {
    videos: [],
    searchValue: null,
  },
  getters: {
    filterTrending (state) {
      return state.videos.filter(i => i.isTrending )
    },
    filterRecommended (state) {
      return state.videos.filter(i => !i.isTrending )
    },
    filterSearch (state) {
      return state.videos.filter(i => i.title.toLowerCase().includes(state.searchValue));
    }
  },
  mutations: {
    SET_VIDEOS(state, payload) {
      state.videos = payload;
    },
    GET_SEARCH_VALUE(state, payload) {
      state.searchValue = payload;
      console.log(state.searchValue)
      state.videos.filter(i => i.title.toLowerCase().includes(state.searchValue));
    }
  },
  actions: {
    async LOAD_VIDEOS({ commit }) {
      let response = await API().get('/videos');
      commit('SET_VIDEOS', response.data);
    },
    SEARCH_VIDEOS({ commit }, payload) {
      commit('GET_SEARCH_VALUE', payload);
    }
  },
  modules: {
  }
})
