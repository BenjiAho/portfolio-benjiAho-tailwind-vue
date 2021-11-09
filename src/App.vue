<template>


        <navbar/>
        <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory relative smooth-scroll">
            <homeSection></homeSection>
            <aboutSection></aboutSection>
            <skillSection></skillSection>
            <portfolioSection></portfolioSection>
            <contactSection></contactSection>
        </main>

</template>

<script>
    import './assets/tailwind.css'
    import navbar from "./components/Navbar"
    import homeSection from "./components/Home-section.vue"
    import aboutSection from "./components/About"
    import skillSection from "./components/Skill"
    import portfolioSection from "./components/Portfolio"
    import contactSection from "./components/Contact"


    export default {
        name: 'App',
        components: {
            navbar,
            homeSection,
            aboutSection,
            skillSection,
            portfolioSection,
            contactSection
        }
    }
</script>

<style>
</style>
