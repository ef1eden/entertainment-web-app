<template>
  <div class="app-wrapper">
    <Navigation />
    <div class="app-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { useStore } from 'vuex';
import { onMounted } from '@vue/runtime-core';

export default {
  name: "app",
  components: { Navigation },
  setup() {
    const store = useStore();
    
    onMounted(() => {
      store.dispatch('LOAD_VIDEOS');
    })
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
	position: relative;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font-family-main;
  margin: 0;
  padding: 0;
  background: $dark-blue;
  color: #fff;
}

#app {
  font-family: $font-family-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  position: relative;
	overflow-x: hidden;
  background: $dark-blue;
  min-height: 100vh;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: $semi-dark-blue;
}
::-webkit-scrollbar-thumb {
  background: $main-color;
  border-radius: 8px;
}

.app-wrapper {
  .app-view {
    padding: 32px 0 0 164px;

    @media(max-width: 768px) {
        padding: 32px 0 0 25px;
    }

    @media(max-width: 600px) {
        padding: 32px 0 0 16px;
    }

    .heading {
      h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.5px;
        margin: 19px 0 25px;

        @media(max-width: 600px) {
          font-size: 20px;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
