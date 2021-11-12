<template>
    <nav class="flex fixed w-1/12 items-center justify-between px-6 h-16 bg-transparent text-gray-700 border-gray-200 z-10">

        <button class="flex items-center" @click="drawer">
            <button class="w-14 h-14 relative focus:outline-none bg-transparent rounded" @click=" isOpen ? isOpen : !isOpen">
                 <span class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': isOpen,' -translate-y-1.5': !isOpen }"></span>
                <span class="block absolute h-0.5 w-5 text-white bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': isOpen } "></span>
                <span class="block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out" :class="{'-rotate-45': isOpen, ' translate-y-1.5': !isOpen}"></span>
            </button>
        </button>


        <aside class="transform top-0 left-0 w-64 bg-transparent fixed h-5/6 overflow-auto ease-in-out transition-all duration-300 z-30 mt-20 space-y-0.5"
               :class="isOpen ? 'transform translate-x-0' : ' transform translate-x--50'">

            <a href="#home" @click="isOpen = false" class="flex items-center p-4 bg-white hover:bg-indigo-500 hover:text-white"
               :class="!isOpen ? 'invisible' : 'visible'">
                <a >Home</a>
            </a>

            <a href="#about" @click="isOpen = false" class="flex items-center p-4 bg-white hover:bg-indigo-500 hover:text-white  " :class="!isOpen ? 'invisible' : 'visible transform duration-100'">
                <a >About</a>
            </a>

            <a href="#services" @click="isOpen = false" class="flex items-center p-4 bg-white hover:bg-indigo-500 hover:text-white  " :class="!isOpen ? 'invisible' : 'visible transform duration-100'">
                <a >Mes Services</a>
            </a>

            <a href="#portfolio" @click="isOpen = false" class="flex items-center bg-white p-4 hover:bg-indigo-500 hover:text-white " :class="!isOpen ? 'invisible' : 'visible transform duration-100'">
                <a >Portfolio</a>
            </a>

            <a href="#contact" @click="isOpen = false" class="flex items-center p-4 bg-white hover:bg-indigo-500 hover:text-white " :class="!isOpen ? 'invisible' : 'visible transform duration-100'">
                <span>Contact</span>
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
        watch: {
            isOpen: {
                immediate: true,
                handler(isOpen) {
                    if (process.client) {
                        if (isOpen) document.body.style.setProperty("overflow", "hidden");
                        else document.body.style.removeProperty("overflow");
                    }
                }
            }
        },
        mounted() {
            document.addEventListener("keydown", e => {
                if (e.keyCode === 27 && this.isOpen) this.isOpen = false;
            });
        }
    }
</script>

<style scoped>

</style>