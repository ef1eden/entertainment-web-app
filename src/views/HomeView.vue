<template>
  <div class="home">
    <SearchBar />
    <div class="trending">
      <div class="heading">
        <h2>Trending</h2>
      </div>
      <TrendingSlider />
    </div>
    <div class="recommended">
      <div class="heading">
        <h2>Recommended for you</h2>
      </div>
      <div class="video-items-container">
        <VideoItem v-for="video in recommendedVideos" :key="video.id" :video="video"/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import TrendingSlider from '@/components/TrendingSlider.vue';
import VideoItem from '@/components/VideoItem.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
  name: 'HomeView',
  components: { SearchBar, TrendingSlider, VideoItem },
  setup() {
    const store = useStore();

    const recommendedVideos = computed(() => {
      return store.state.videos.filter(i => !i.isTrending )
    });

    return {
      recommendedVideos
    }
  }
}
</script>

<style lang="scss" scoped>
.recommended {
  margin-top: 42px;

  @media(max-width: 768px) {
      margin-top: 62px;
  }

  .video-items-container {
    display: flex;
    flex-wrap: wrap;
    margin-right: -4px;
    margin-top: 31px;
  }
}
</style>