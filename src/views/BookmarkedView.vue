<template>
  <div>
    <SearchBar :title="'Search for bookmarked shows'"/>
    <Spinner v-if="showSpinner" />
    <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__animate__fadeOut"
    >
      <div v-if="!showSpinner">
          <div v-show="!searchActive">
            <VideoList :videos="bookmarkedMovies" :title="'Bookmarked Movies'" />
            <VideoList :videos="bookmarkedTVSeries" :title="'Bookmarked TV Series'" />
          </div>
          <div v-show="searchActive">
            <VideoList :videos="searchBookmarkedMovies" :title="`Bookmarked Movies: found ${searchBookmarkedMovies.length} results for '${searchActive}'`" />
            <VideoList :videos="searchBookmarkedTVSeries" :title="`Bookmarked TV Series: found ${searchBookmarkedTVSeries.length} results for '${searchActive}'`" />
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
  name: 'BookmarkedView',
  components: { SearchBar, VideoList, Spinner },
  setup() {
    const store = useStore();

    const bookmarkedMovies = computed(() => store.state.videos.filter(i => {
      return i.isBookmarked && i.category === 'Movie';
    } ));
    const searchBookmarkedMovies = computed(() => store.state.videos.filter(i => {
      if(i.isBookmarked && i.category === 'Movie') {
        return i.title.toLowerCase().includes(store.state.searchValue)
      }
    }));

    const bookmarkedTVSeries = computed(() => store.state.videos.filter(i => {
      return i.isBookmarked && i.category === 'TV Series';
    } ));
    const searchBookmarkedTVSeries = computed(() => store.state.videos.filter(i => {
      if(i.isBookmarked && i.category === 'TV Series') {
        return i.title.toLowerCase().includes(store.state.searchValue)
      }
    }));

    return {
        bookmarkedMovies,
        searchBookmarkedMovies,
        bookmarkedTVSeries,
        searchBookmarkedTVSeries,
        searchActive: computed(() => store.state.searchValue),
        showSpinner: computed(() => store.state.showLoading),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>