<template>
  <div class="home">
    <SearchBar :title="'Search for movies or TV series'"/>
    <div v-if="!searchActive">
      <TrendingSlider :title="'Trending'" />
      <VideoList :title="'Recommended for you'" />
    </div>
    <div v-else>
      <VideoList :title="`Found ${countFilteredVideos} results for '${searchActive}'`" />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import TrendingSlider from '@/components/TrendingSlider.vue';
import VideoList from '@/components/VideoList.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
  name: 'HomeView',
  components: { SearchBar, TrendingSlider, VideoList },
  setup() {
    const store = useStore();

    return {
        searchActive: computed(() => store.state.searchValue),
        countFilteredVideos: computed(() => store.getters.filterSearch.length),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>