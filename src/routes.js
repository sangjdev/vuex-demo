import home from './components/home.vue'
import login from './components/login.vue'
import mypage from './components/mypage.vue'

export default [
    {
        path: '/',
        component: home
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/mypage',
        component: mypage
        // ,beforeEnter: requireAuth
    }
]