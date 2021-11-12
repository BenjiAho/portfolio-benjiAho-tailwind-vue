<template>
        <navbar/>
        <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory relative smooth-scroll">
            <home></home>
            <aboutSection></aboutSection>
            <Services></Services>
            <portfolioSection></portfolioSection>
            <contactSection></contactSection>
        </main>

</template>

<script>
    import './assets/tailwind.css'
    import navbar from "./components/Navbar"
    import home from "./components/Home-section.vue"
    import aboutSection from "./components/About"
    import Services from "./components/Services"
    import portfolioSection from "./components/Portfolio"
    import contactSection from "./components/Contact"


    export default {
        name: 'App',
        components: {
            navbar,
            home,
            aboutSection,
            Services,
            portfolioSection,
            contactSection
        }
    }
</script>

<style>
</style>
