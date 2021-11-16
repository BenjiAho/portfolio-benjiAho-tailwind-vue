<template>
    <nav class="flex fixed w-1/12 items-center justify-between px-6 h-16 bg-transparent text-gray-700 border-gray-200 z-10 font-mono">

        <button class="flex items-center" @click="drawer">
            <button class="w-14 h-14 relative focus:outline-none bg-transparent rounded" @click=" isOpen ? isOpen : !isOpen">
                 <span class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-1000 ease-in-out" :class="{'rotate-45': isOpen,' -translate-y-1.5': !isOpen }"></span>
                <span class="block absolute h-0.5 w-5 text-white bg-current transform transition duration-1000 ease-in-out" :class="{'opacity-0': isOpen } "></span>
                <span class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-1000 ease-in-out" :class="{'-rotate-45': isOpen, ' translate-y-1.5': !isOpen}"></span>
            </button>
        </button>


        <aside class="transform top-0 left-0 w-64 bg-transparent fixed overflow-auto ease-in-out transition-all duration-1000 z-30 mt-20 space-y-0.5">

            <a href="#home" @click="isOpen = false" class="flex items-center p-4 bg-white  duration-1000 hover:bg-purple-800 hover:text-white"
               :class="!isOpen ? 'transform -translate-x-96 invisible' : 'transform translate-x-0  visible'">
                Home
            </a>

            <a href="#about" @click="isOpen = false" class="flex items-center p-4 bg-white delay-100 duration-1000 hover:bg-purple-800 hover:text-white  " :class="!isOpen ? 'transform -translate-x-96 ' : ' transform translate-x-0 duration-100'">
                 About
            </a>

            <a href="#services" @click="isOpen = false" class="flex items-center p-4 bg-white delay-200 duration-1000 hover:bg-purple-800 hover:text-white  " :class="!isOpen ? 'transform -translate-x-96 ' : ' transform translate-x-0 duration-100'">
                Mes Services
            </a>

            <a href="#portfolio" @click="isOpen = false" class="flex items-center p-4 bg-white delay-300 duration-1000 hover:bg-purple-800 hover:text-white  " :class="!isOpen ? 'transform -translate-x-96 ' : ' transform translate-x-0 duration-100'">
                Portfolio
            </a>

            <a href="#contact" @click="isOpen = false" class="flex items-center p-4 bg-white delay-500 duration-1000 hover:bg-purple-800 hover:text-white  " :class="!isOpen ? 'transform -translate-x-96 ' : ' transform translate-x-0 duration-100'">
                Contact
            </a>

        </aside>
    </nav>

</template>

<script>
    export default {
        name: "navbar",
        // in data, I like to store a view object with all
// the values I need for a component to manage
// it's 'view' state - ie loading,
// or in this case, if the user is at the top of the page or not
        data() {
            return {
                isOpen: false,
            }
        },
        methods: {
            // the function to call when the user scrolls, added as a method
            drawer() {
                this.isOpen = !this.isOpen;
            }
        },
        // watch: {
        //     isOpen: {
        //         immediate: true,
        //         handler(isOpen) {
        //             if (process.client) {
        //                 if (isOpen) document.body.style.setProperty("overflow", "hidden");
        //                 else document.body.style.removeProperty("overflow");
        //             }
        //         }
        //     }
        // },
        // mounted() {
        //     document.addEventListener("keydown", e => {
        //         if (e.keyCode === 27 && this.isOpen) this.isOpen = false;
        //     });
        // }
    }
</script>

<style scoped>
aside{
    overflow: hidden;
}
</style>