import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/views/DefaultLayout.vue'
import ContentLayout from '@/views/ContentLayout.vue'

const routes = [
    { path : '/home', name:'DefaultLayout', component : DefaultLayout},
    { path : '/contentPage', name:'contentPage', component : ContentLayout, props : true},
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router