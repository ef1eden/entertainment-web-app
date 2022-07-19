<template>
  <div class="app-wrapper">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__animate__fadeOut"
    >
      <Navigation v-if="navLoaded" />
    </transition>
    <div class="app-view">
        <router-view
          v-slot="{ Component }"
        >
          <transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          > 
            <component :is="Component"></component>
          </transition>
        </router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { useStore } from 'vuex';
import { onMounted, ref } from '@vue/runtime-core';

export default {
  name: "app",
  components: { Navigation },
  setup() {
    const store = useStore();
    const navLoaded = ref(false);
    
    onMounted(() => {
      navLoaded.value = true;
      store.dispatch('LOAD_VIDEOS');
    })

    return { navLoaded }
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

.nav-fade-enter-active,
.nav-fade-leave-active {
  transition: opacity 0.5s ease;
}

.nav-fade-enter-from,
.nav-fade-leave-to {
  opacity: 0;
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
