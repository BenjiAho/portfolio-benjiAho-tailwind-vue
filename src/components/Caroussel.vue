<template>
    <carousel :settings="settings" :breakpoints="breakpoints" class="w-10/12 ">
        <slide v-for="slide in images" :key="slide" class="flex flex-col">
            <img class="carousel__item carousel__viewport" draggable="true" :src="slide.img"/>
        </slide>

        <template #addons>
            <Pagination/>
            <navigation/>
        </template>
    </carousel>

</template>

<script>
    // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
    import 'vue3-carousel/dist/carousel.css';
    import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

    export default {
        name: 'caroussel',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
        data() {
            return {
                images: [
                    { id: 1,img: "https://picsum.photos/300/300" },
                    { id: 2, img: "https://picsum.photos/300/301" },
                    { id: 3, img: "https://picsum.photos/300/302" },
                    { id: 4, img: "https://picsum.photos/300/303" },
                    { id: 5, img: "https://picsum.photos/300/304" },
                    { id: 6, img: "https://picsum.photos/300/305" },
                ],
                // carousel settings
                settings: {
                    wrapAround:"true",
                    itemsToShow: 1,
                    snapAlign: "center",
                    transition: 300,
                    autoplay: 5000,

                },
                // breakpoints are mobile first
                // any settings not specified will fallback to the carousel settings
                breakpoints: {
                    // 700px and up
                    700: {
                        itemsToShow: 3,
                        snapAlign: "center"
                    },
                    // 1024 and up
                    1024: {
                        itemsToShow: 3,
                        snapAlign: "start"
                    }
                }
            }
        },
    }
</script>
<style>
    .carousel__item {
        width: 100%;
        background-color: #642afb;
        color: white;
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel__viewport{
        min-height: 80%;
    }

    .carousel__slide {
        padding: 10px;
    }

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
    }
</style>