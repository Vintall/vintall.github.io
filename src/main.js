import './assets/main.css'

import { createWebHashHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'

import App from './App.vue'
import HomeView from './components/views/HomeView.vue'
import ProjectsView from './components/views/ProjectsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projects', name: 'projects', component: ProjectsView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
