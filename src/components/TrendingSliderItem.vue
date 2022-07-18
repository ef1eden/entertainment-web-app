<template>
    <div class="trending-item">
        <div class="bookmark-icon">
            <inline-svg v-if="!video.isBookmarked" :src="require('@/assets/images/svg/icon-bookmark.svg')"/>
            <inline-svg v-if="video.isBookmarked" class="bookmarked" :src="require('@/assets/images/svg/icon-bookmark.svg')"/>
        </div>
        <div class="play-button">
            <inline-svg :src="require('@/assets/images/svg/icon-play.svg')"/>
            <span>Play</span>
        </div>
        <img class="item-photo" v-bind:src="imageSize" alt="">
        <div class="item-content">
            <div class="info">
                <span class="year">{{ video.year }}</span>
                <span class="category">
                    <img v-if="video.category === 'Movie'" src="@/assets/images/svg/icon-category-movie.svg" alt="">
                    <img v-if="video.category === 'TV Series'" src="@/assets/images/svg/icon-category-tv.svg" alt="">
                    {{ video.category }}
                </span>
                <span class="age-limit">{{ video.rating }}</span>
            </div>
            <div class="name">{{ video.title }}</div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import InlineSvg from 'vue-inline-svg';
import { onBeforeMount, onBeforeUnmount } from '@vue/runtime-core';

export default {
    name: 'TrendingSliderItem',
    props: {
        video: {
            type: Object,
            required: true,
        }
    },
    components: { InlineSvg },
    setup(props) {
        const width = ref(null);
        const imageSize = ref(null)
        const breakpoints = {
            mobile: 768
        }

        function setImageSize() {
            width.value = window.innerWidth;
            if(width.value > breakpoints.mobile) {
                imageSize.value = require(`../assets/images/thumbnails/${props.video.thumbnail.trending.large}`);
            }
            else {
                imageSize.value = require(`../assets/images/thumbnails/${props.video.thumbnail.trending.small}`);
            }
        }

        onBeforeMount(() => {
            setImageSize()
            window.addEventListener("resize", setImageSize);
        });

        onBeforeUnmount(() => {
            window.removeEventListener("resize", setImageSize);
        });

        return {
            imageSize
        }
    }
}
</script>

<style lang="scss" scoped>
    .trending-item {
        max-width: 470px;
        width: 100%;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        transition: all .4s ease;

        @media(max-width: 1400px) {
            max-width: 420px;
        }

        @media(max-width: 500px) {
            max-width: 300px;
        }

        @media(max-width: 400px) {
            max-width: 250px;
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            border-radius: 8px;
            opacity: 0;
            transition: all .3s ease;
        }

        &:hover {
            &::before {
                opacity: 1;
            }
            .play-button {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .item-content {
            position: absolute;
            width: 100%;
            height: 100px;
            left: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%);
            border-radius: 0px 0px 8px 8px;
            padding: 0 24px 24px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .info {
                display: flex;
                color: rgba(255,255,255,0.75);
                font-weight: 300;
                font-size: 15px;
                line-height: 19px;
                margin-bottom: 3px;

                @media(max-width: 600px) {
                    font-size: 12px;
                    line-height: 15px;
                }

                .category {
                    display: flex;
                    align-items: center;
                    
                    img {
                        width: 12px;
                        height: 12px;
                        margin-right: 6px;
                    }
                }

                span {
                    position: relative;
                    margin-right: 20px;

                    &::after {
                        content: '';
                        position: absolute;
                        right: -12px;
                        top: 8px;
                        width: 3px;
                        height: 3px;
                        background: rgba(255,255,255,0.5);
                        border-radius: 50px;                     
                    }
                    &:last-child {
                        &::after {
                            display: none;
                        }
                    }
                }
            }

            .name {
                font-size: 24px;
                line-height: 30px;
                font-weight: 500;

                @media(max-width: 600px) {
                    font-size: 15px;
                    line-height: 19px;
                }
            }
        }
        
        .item-photo {
            max-width: 100%;
            width: 100%;
            border-radius: 8px;
            display: block;
        }

        .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -58px;
            margin-top: -24px;
            z-index: 1;
            width: 117px;
            height: 48px;
            border-radius: 28.5px;
            background: rgba(255,255,255,0.5);
            display: flex;
            align-items: center;
            padding: 6px 9px 5px;
            opacity: 0;
            transition: all .3s ease;
            transform: translateY(15px);

            @media(max-width: 600px) {
                width: 100px;
                height: 42px;
                margin: 0;
                right: 11px;
                left: auto;
                top: auto;
                bottom: 21px;
            }

            span {
                font-size: 18px;
                line-height: 23px;
                font-weight: 500;
                position: relative;
                top: -1px;
                transition: all .3s ease;

                @media(max-width: 600px) {
                    font-size: 15px;
                    line-height: 19px;
                }
            }

            :deep(svg) {
                width: 30px;
                height: 30px;
                margin-right: 19px;

                @media(max-width: 600px) {
                    margin-right: 10px;
                }

                path {
                    transition: all .3s ease;
                }
            }

            &:hover {
                background: #fff;

                span {
                    color: $dark-blue;
                }

                :deep(svg) {
                    path {
                        fill: $main-color;
                    }
                }
            }
        }

        .bookmark-icon {
            position: absolute;
            top: 16px;
            right: 24px;
            width: 32px;
            height: 32px;
            background: rgba(16,20,30,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            transition: all .3s ease;

            @media(max-width: 600px) {
                top: 9px;
                right: 9px;
            }

            :deep(svg) {
                path {
                    transition: all .3s ease;
                }

                &.bookmarked {
                    path {
                        fill: #fff;
                    }
                }
            }

            &:hover {
                background: #fff;
                :deep(svg) {
                    path {
                        stroke: $dark-blue;
                    }

                    &.bookmarked {
                        path {
                            fill: $dark-blue;
                        }
                    }
                }
            }
        }
    }
</style>