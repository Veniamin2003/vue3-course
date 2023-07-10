import Main from "@/Pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/Pages/PostPage.vue";
import About from "@/Pages/About.vue";
import PostIdPage from "@/Pages/PostIdPage.vue";
import PostPageWithStore from "@/Pages/PostPageWithStore.vue";
import PostPageCompositionApi from "@/Pages/PostPageCompositionApi.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;