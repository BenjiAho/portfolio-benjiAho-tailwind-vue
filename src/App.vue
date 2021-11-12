<template>


        <navbar/>
        <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory relative smooth-scroll">
            <home></home>
            <aboutSection></aboutSection>
            <skillSection></skillSection>
            <portfolioSection></portfolioSection>
            <contactSection></contactSection>
        </main>

</template>

<script>
    import './assets/tailwind.css'
    import navbar from "./components/Navbar"
    import home from "./components/Home-section.vue"
    import aboutSection from "./components/About"
    import skillSection from "./components/Skill"
    import portfolioSection from "./components/Portfolio"
    import contactSection from "./components/Contact"


    export default {
        name: 'App',
        components: {
            navbar,
            home,
            aboutSection,
            skillSection,
            portfolioSection,
            contactSection
        }
    }
</script>

<style>
</style>
