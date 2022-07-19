<template>
  <div>
    <SearchBar :title="'Search for movies'"/>
    <Spinner v-if="showSpinner" />
    <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__animate__fadeOut"
    >
      <div v-if="!showSpinner">
          <div v-show="!searchActive">
            <VideoList :videos="recommendedMovies" :title="'Movies'" />
          </div>
          <div v-show="searchActive">
            <VideoList :videos="searchMovies" :title="`Found ${searchMovies.length} results for '${searchActive}'`" />
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import VideoList from '@/components/VideoList.vue';
import Spinner from '@/components/Spinner.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
  name: 'HomeView',
  components: { SearchBar, VideoList, Spinner },
  setup() {
    const store = useStore();

    const recommendedMovies = computed(() => store.state.videos.filter(i => i.category === 'Movie' ));
    const searchMovies = computed(() => store.state.videos.filter(i => {
      if (i.category == 'Movie') {
        return i.title.toLowerCase().includes(store.state.searchValue)
      }
    }));

    return {
        recommendedMovies,
        searchMovies,
        searchActive: computed(() => store.state.searchValue),
        showSpinner: computed(() => store.state.showLoading),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>