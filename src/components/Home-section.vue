<template>
    <section id="home" class="w-full h-screen snap-start flex flex-col space-y-12 items-center justify-center font-mono">
        <h1  class="text-3xl font-bold md:text-5xl">Bienvenu sur le portfolio de Benjamin Aho-nienne</h1>

        <img class="h-1/6 rounded-full shadow-2xl" src="../assets/images/Benjamin_crop.jpg" alt="profil image">

        <TypeEffect />

        <span class="opacity-50 flex justify-center animate-bounce rounded-full p-4 bg-white text-black text-sm w-20 ">
            <img class="" src="../assets/images/arrow-down.png" alt="scroll down mouse icon">
        </span>

    </section>
</template>

<script>
    import TypeEffect from './TypeEffect.vue'
    export default {
        name: "home",
        components: {TypeEffect},
    }
</script>

<style scoped>

    body {
        margin: 0;
        padding: 0;
    }
    #home {

        font-weight: normal;
        font-size: 1rem;
        color: #fff;
        background-color: #241E17;
        width: 100%;
        min-height: 100vh;
    }
</style>