<template>
    <div class="video-item">
        <div class="photo-wrapper">
            <div class="bookmark-icon">
                <inline-svg v-if="!video.isBookmarked" :src="require('@/assets/images/svg/icon-bookmark.svg')"/>
                <inline-svg v-if="video.isBookmarked" class="bookmarked" :src="require('@/assets/images/svg/icon-bookmark.svg')"/>
            </div>
            <div class="play-button">
                <inline-svg :src="require('@/assets/images/svg/icon-play.svg')"/>
                <span>Play</span>
            </div>
            <img class="item-photo" :src="require(`../assets/images/thumbnails/${video.thumbnail.regular.large}`)" alt="">
        </div>
        <div class="item-content">
            <div class="info">
                <span class="year">{{ video.year }}</span>
                <span class="category">
                    <img v-if="video.category === 'Movie'" src="@/assets/images/svg/icon-category-movie.svg" alt="">
                    <img v-if="video.category === 'TV Series'" class="cat-tv" src="@/assets/images/svg/icon-category-tv.svg" alt="">
                    {{ video.category }}
                </span>
                <span class="age-limit">{{ video.rating }}</span>
            </div>
            <div class="name">{{ video.title }}</div>
        </div>
    </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
    props: {
        video: {
            type: Object,
            required: true,
        }
    },
    components: {
        InlineSvg
    },
}
</script>

<style lang="scss" scoped>
    .video-item {
        width: 25%;
        min-width: 25%;
        padding-right: 40px;
        margin-bottom: 33px;
        transition: all .4s ease;

        @media(max-width: 1200px) {
            width: 33.333%;
            width: calc(100% / 3);
            min-width: 33.333%;
            min-width: calc(100% / 3);
        }

        @media(max-width: 768px) {
            padding-right: 25px;
        }

        @media(max-width: 600px) {
            width: 50%;
            min-width: 50%;
            padding-right: 16px;
        }

        @media(max-width: 380px) {
            width: 100%;
            min-width: 100%;
        }

        &:hover {
            .photo-wrapper {
                &::before {
                    opacity: 1;
                }
                .play-button {
                    opacity: 1;
                    transform: translateY(0);
                }
            }   
        }

        .item-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top: 8px;

            .info {
                display: flex;
                color: rgba(255,255,255,0.75);
                font-weight: 300;
                font-size: 13px;
                line-height: 16px;
                margin-bottom: 4px;

                @media(max-width: 600px) {
                    font-size: 11px;
                    line-height: 14px;
                }

                .category {
                    display: flex;
                    align-items: center;
                    
                    img {
                        width: 12px;
                        height: 12px;
                        margin-right: 6px;

                        &.cat-tv {
                            position: relative;
                            top: -1px;
                        }
                    }
                }

                span {
                    position: relative;
                    margin-right: 20px;

                    &::after {
                        content: '';
                        position: absolute;
                        right: -12px;
                        top: 7px;
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
                font-size: 18px;
                line-height: 23px;
                font-weight: 500;

                @media(max-width: 600px) {
                    font-size: 14px;
                    line-height: 18px;
                }
            }
        }

        .photo-wrapper {
            width: 100%;
            position: relative;
            cursor: pointer;
            overflow: hidden;

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

                span {
                    font-size: 18px;
                    line-height: 23px;
                    font-weight: 500;
                    position: relative;
                    top: -1px;
                    transition: all .3s ease;
                }

                :deep(svg) {
                    width: 30px;
                    height: 30px;
                    margin-right: 19px;

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
                right: 16px;
                width: 32px;
                height: 32px;
                background: rgba(16,20,30,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;
                transition: all .3s ease;

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
    }
</style>