<template>
    <div class="recommended">
        <div class="heading">
        <h2>{{ title }}</h2>
        </div>
        <div class="video-items-container"> 
            <VideoItem v-for="video in videos" :key="video.id" :video="video"/>
        </div>
    </div>
</template>

<script>
import VideoItem from '@/components/VideoItem.vue';

export default {
    name: 'VideoList',
    props: {
        title: {
            type: String,
            required: true,
        },
        videos: {
            type: Object,
            required: true,
        }
    },
    components: { VideoItem },
    setup() {

        return {
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
    margin-top: 25px;
  }
}
</style>