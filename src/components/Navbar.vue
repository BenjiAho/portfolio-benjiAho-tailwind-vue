<template>
    <nav class="flex fixed w-1/12 items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
        <div class="flex items-center">
            <button class="mr-2" aria-label="Open Menu" @click="drawer">
                <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        class="w-8 h-8"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <h1>Benji Portfolio</h1>
        </div>

        <div class="flex items-center"></div>

        <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
        >
            <div
                    @keydown.esc="isOpen = false"
                    v-show="isOpen"
                    class="z-10 fixed inset-0 transition-opacity"
            >
                <div
                        @click="isOpen = false"
                        class="absolute inset-0 bg-black opacity-50"
                        tabindex="0"
                ></div>
            </div>
        </transition>

        <aside class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
               :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

            <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
                <h1>Benji Portfolio</h1>
            </span>

            <a href="#home" @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
                <a >Home</a>
            </a>

            <a href="#about" @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
                <a >About</a>
            </a>

            <a href="#skill" @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
                <a >Skill</a>
            </a>

            <a href="#portfolio" @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
                <a >Portfolio</a>
            </a>

            <a href="#contact" @click="isOpen = false" class="flex items-center p-4 hover:bg-indigo-500 hover:text-white ">
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