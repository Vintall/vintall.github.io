import './assets/main.css'

import { createWebHashHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'

import App from './App.vue'
import HomeView from '@/components/pages/HomeView.vue'
import ProjectsView from '@/components/pages/ProjectsView.vue'
import ResourcesView from '@/components/pages/ResourcesView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/resources', name: 'resources', component: ResourcesView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
