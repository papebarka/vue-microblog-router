import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'
import NewPostView from '../views/NewPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,

      children: [
        {
          path: 'new',
          component: NewPostView
        },
        {
          path: ':id',
          component: PostView
        }
      ]
    }
  ]
})

export default router
