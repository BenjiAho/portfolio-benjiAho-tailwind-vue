<template>
    <nav
            :class="{ 'scrolled': !view.atTopOfPage }"
            class="fixed flex w-full bg-white border-b items-center justify-between flex-wrap m-auto top-0 animated opacity-90">

        <ul class="sticky flex border-b w-screen">
            <li>
                <p class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-bold">
                    Benjamin Aho-nienne Portfolio</p>
            </li>
            <li class="-mb-px mr-1">
                <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-500 font-semibold hover:text-blue-800 active:text-red-800"
                   href="#home">Home</a>
            </li>
            <li class="mr-1">
                <a class="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-800 font-semibold"
                   href="#about">About</a>
            </li>
            <li class="mr-1">
                <a class="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-800 font-semibold"
                   href="#skill">Skill</a>
            </li>
            <li class="mr-1">
                <a class="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-800 font-semibold"
                   href="#portfolio">Portfolio</a>
            </li>
            <li class="mr-1">
                <a class="bg-white inline-block py-2 px-4 text-gray-500 font-semibold" href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navbar",
        // in data, I like to store a view object with all
// the values I need for a component to manage
// it's 'view' state - ie loading,
// or in this case, if the user is at the top of the page or not
        data () {
            return {
                view: {
                    atTopOfPage: true
                }
            }
        },

// a beforeMount call to add a listener to the window
        beforeMount () {
            window.addEventListener('scroll', this.handleScroll);
        },

        methods: {
            // the function to call when the user scrolls, added as a method
            handleScroll(){
                // when the user scrolls, check the pageYOffset
                if(window.pageYOffset>0){
                    // user is scrolled
                    if(this.view.atTopOfPage) this.view.atTopOfPage = false
                }else{
                    // user is at top of page
                    if(!this.view.atTopOfPage) this.view.atTopOfPage = true
                }
            }
        }
    }
</script>

<style scoped>

</style>