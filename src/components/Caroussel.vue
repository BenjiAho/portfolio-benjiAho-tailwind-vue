<template>
    <carousel :settings="settings" :breakpoints="breakpoints" class="w-10/12 ">
        <slide id="slide" v-for="slide in images" :key="slide" class="flex flex-col">
            <img class="carousel__item carousel__viewport " draggable="true" :src="slide.img"/>
                <p class="text-opacity-0 hover:text-opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">{{slide.text}}</p>
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
                    {id: 1, img: "https://picsum.photos/300/300", text: "img1"},
                    {id: 2, img: "https://picsum.photos/300/301", text: "img2"},
                    {id: 3, img: "https://picsum.photos/300/302", text: "img3"},
                    {id: 4, img: "https://picsum.photos/300/303", text: "img4"},
                    {id: 5, img: "https://picsum.photos/300/304", text: "img5"},
                    {id: 6, img: "https://picsum.photos/300/305", text: "img6"},
                ],
                // carousel settings
                settings: {
                    wrapAround: "true",
                    itemsToShow: 1,
                    snapAlign: "center",
                    transition: 300,
                    autoplay: 5000,
                    touchDrag: true,

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
                },
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
    img:hover{
        opacity: 0.5;
    }
    .carousel__viewport {
        min-height: 80%;
    }

    .carousel__slide {
        padding: 10px;
    }
#slide>p{
    width: 25%;
}
    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        border: 5px solid #deb5ff;
    }
</style>