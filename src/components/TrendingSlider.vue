<template>
    <div class="trending">
        <div class="heading">
        <h2>{{ title }}</h2>
        </div>
        <swiper
            :slidesPerView="'auto'"
            :breakpoints="swiperOptions.breakpoints"
            :freeMode="true"
        >
            <swiper-slide v-for="video in trendingVideos" :key="video.id">
                <TrendingSliderItem :video="video" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import TrendingSliderItem from '@/components/TrendingSliderItem.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
    name: 'TrendingSlider',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    components: {
        Swiper, SwiperSlide, TrendingSliderItem
    },
    setup() {
        const store = useStore();
        const swiperOptions = {
            breakpoints: {       
                0: {       
                    spaceBetween: 16     
                },          
                600: {       
                    spaceBetween: 25     
                },
                768: {       
                    spaceBetween: 40     
                } 
            }
        };
        const trendingVideos = computed(() => store.state.videos.filter(i => i.isTrending ));

        return {
            swiperOptions,
            trendingVideos
        };
    },
}
</script>

<style lang="scss">
    .trending {
        margin-bottom: 40px;

        .swiper {
            width: 100%;
            height: 100%;

            .swiper-slide {
                width: auto;

                &:last-child{
                    margin-right: 36px !important;

                    @media(max-width: 768px) {
                        margin-right: 25px !important;
                    }

                    @media(max-width: 600px) {
                        margin-right: 16px !important;
                    }
                }
            }
        }
    }
</style>