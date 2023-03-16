import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
Vue.use(VueRouter)
export const router = new VueRouter({
    mode:'history',
    routes :[
        { path: '/contact-us', component: ContactUs },
        { path: '/about-us', component: AboutUs },
      ]
})
 
new Vue({
    router,
    el:'#app',
    render:h=>h(App)
}).$mount('#app')