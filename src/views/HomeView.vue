<template>
  <div>
    <SearchBar :title="'Search for movies or TV series'"/>
    <Spinner v-if="showSpinner" />
    <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__animate__fadeOut"
    >
      <div v-if="!showSpinner">
          <div v-show="!searchActive">
            <TrendingSlider :title="'Trending'" />
            <VideoList :videos="recommendedVideos" :title="'Recommended for you'" />
          </div>
          <div v-show="searchActive">
            <VideoList :videos="searchVideos" :title="`Found ${searchVideos.length} results for '${searchActive}'`" />
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import TrendingSlider from '@/components/TrendingSlider.vue';
import VideoList from '@/components/VideoList.vue';
import Spinner from '@/components/Spinner.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
  name: 'HomeView',
  components: { SearchBar, TrendingSlider, VideoList, Spinner },
  setup() {
    const store = useStore();

    const recommendedVideos = computed(() => store.state.videos.filter(i => !i.isTrending ));
    const searchVideos = computed(() => store.state.videos.filter(i => {
      return i.title.toLowerCase().includes(store.state.searchValue)
    }));

    return {
        recommendedVideos,
        searchVideos,
        searchActive: computed(() => store.state.searchValue),
        showSpinner: computed(() => store.state.showLoading),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>