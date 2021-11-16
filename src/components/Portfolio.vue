<template>
    <section id="portfolio"
             class="w-full max-h-screen h-screen snap-start space-y-12 bg-gray-700  font-mono carousel-wrapper flex flex-col justify-center items-center">
        <h4 class="text-3xl font-bold md:text-5xl text-purple-500">Portfolio</h4>
<caroussel />

    </section>
</template>

<script>
import caroussel from "./Caroussel.vue";

    export default {
        name: 'portfolioSection',
        title: 'Loop mode / Infinite loop',
        components: {caroussel},

    }
</script>

<style lang="scss" scoped>

</style>