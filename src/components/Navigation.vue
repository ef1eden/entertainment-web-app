<template>
  <nav>
    <div class="nav-container">
        <div class="nav-content">
            <div class="logo logo-mobile">
                <router-link to="/">
                    <inline-svg :src="require('../assets/images/svg/logo.svg')"/>
                </router-link>
            </div>
            <div class="nav-links">
                <div class="logo">
                    <router-link to="/">
                        <inline-svg :src="require('../assets/images/svg/logo.svg')"/>
                    </router-link>
                </div>
                <div class="menu">
                    <router-link to="/">
                        <inline-svg class="icon" :src="require('../assets/images/svg/icon-nav-home.svg')"/>
                    </router-link>
                    <router-link to="/movies">
                        <inline-svg class="icon" :src="require('../assets/images/svg/icon-nav-movies.svg')"/>
                    </router-link>
                    <router-link to="/tv-series">
                        <inline-svg class="icon" :src="require('../assets/images/svg/icon-nav-tv-series.svg')"/>
                    </router-link>
                    <router-link to="/bookmarked">
                        <inline-svg class="icon" :src="require('../assets/images/svg/icon-nav-bookmark.svg')"/>
                    </router-link>
                </div>
            </div>
            <div class="profile">
                <img class="avatar" src="@/assets/images/image-avatar.png" alt="">
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
    name: 'Navigation',
    components: {
        InlineSvg
    }
}
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    height: 100vh;
    min-height: 100vh;

    @media(max-width: 768px) {
        position: relative;
        height: 98px;
        min-height: unset;
        width: 100%;
    }

    .nav-container {
        padding: 32px;
        height: 100%;

        @media(max-width: 768px) {
            padding: 23px 25px;
        }

        @media(max-width: 600px) {
            padding: 23px 16px;
        }

        .nav-content {
            width: 96px;
            height: 100%;
            background: $semi-dark-blue;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 35px 20px 28px;

            @media(max-width: 768px) {
                height: 72px;
                width: 100%;
                flex-direction: initial;
                padding: 20px 17px 13px 23px;
                border-radius: 10px;
            }

            .nav-links {
                .logo {
                    text-align: center;
                    margin-bottom: 70px;

                    @media(max-width: 768px) {
                        display: none;
                    }
                }

                .menu {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    @media(max-width: 768px) {
                        flex-direction: initial;
                    }

                    .router-link-exact-active {
                        :deep(.icon) {
                            path {
                                fill: #fff;
                            }
                        }
                    }

                    :deep(.icon) {
                        margin-bottom: 36px;

                        @media(max-width: 768px) {
                            margin: 0 16px;
                        }
                        @media(max-width: 450px) {
                            margin: 0 11px;
                        }
                        path {
                            transition: all .4s ease;
                        }   
                        &:hover {
                            path {
                                fill: $main-color;
                            }
                        }
                    }
                }
            }

            .logo-mobile {
                display: none;

                @media(max-width: 768px) {
                    display: block;
                }
            }

            .profile {
                .avatar {
                    width: 40px;
                    max-width: 40px;

                    @media(max-width: 768px) {
                        width: 32px;
                        max-width: 32px;
                    }
                }
            }
        }
    }
}
</style>