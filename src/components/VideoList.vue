<template>
    <div class="recommended">
        <div class="heading">
        <h2>{{ title }}</h2>
        </div>
        <div v-if="!searchActive" class="video-items-container">
            <VideoItem v-for="video in recommendedVideos" :key="video.id" :video="video"/>
        </div>
        <div v-else class="video-items-container">
            <VideoItem v-for="video in searchVideos" :key="video.id" :video="video"/>
        </div>
    </div>
</template>

<script>
import VideoItem from '@/components/VideoItem.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
    name: 'VideoList',
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    components: { VideoItem },
    setup() {
        const store = useStore();

        return {
            recommendedVideos: computed(() => store.getters.filterRecommended),
            searchVideos: computed(() => store.getters.filterSearch),
            searchActive: computed(() => store.state.searchValue)
        }
    }
}
</script>

<style lang="scss" scoped>
.recommended {
  margin-top: 19px;

  .video-items-container {
    display: flex;
    flex-wrap: wrap;
    margin-right: -4px;
    margin-top: 31px;
  }
}
</style>