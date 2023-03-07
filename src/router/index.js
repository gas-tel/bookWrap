import { createRouter, createWebHistory } from 'vue-router'

// import App from '@/App.vue'
import DefaultLayout from '@/views/DefaultLayout.vue'
import ContentLayout from '@/views/ContentLayout.vue'
import MyPageLayout from '@/views/MyPageLayout.vue'

const routes = [
    { path : '/', alias: ['/home', '/'], name:'DefaultLayout', component : DefaultLayout},
    { path : '/contentPage', name:'contentPage', component : ContentLayout, props : true
        // beforeEnter : ()=>{
        //     App.methods.topNavBtn('comic')
        // }
    },
    {path : '/myPage', name : 'myPage', component : MyPageLayout, props : true}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router