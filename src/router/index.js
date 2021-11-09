import { createWebHistory, createRouter } from "vue-router";
import homeSection from "../components/Home-section.vue";
import aboutSection from "../components/About.vue";
import contactSection from "../components/Contact.vue";
import portfolioSection from "../components/Portfolio.vue";
import skillSection from "../components/Skill.vue";

const routes = [
    {
        path: "/",
        name: "Home-section",
        component: homeSection,
    },
    {
        path: "/about",
        name: "About",
        component: aboutSection,
    },{
        path: "/skill",
        name: "Skill",
        component: skillSection,
    },{
        path: "/portfolio",
        name: "Portfolio",
        component: portfolioSection,
    },{
        path: "/contact",
        name: "Contact",
        component: contactSection,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;