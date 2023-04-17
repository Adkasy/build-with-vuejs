import { createRouter, createWebHistory } from "vue-router";
import Homepage from '../views/Homepage.vue'
import UpdatePage from '../views/UpdatePage.vue'
import AddPage from '../views/AddPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/update/:userID",
      name: "update",
      component: UpdatePage,
    },
    {
      path: '/add',
      name: 'add',
      component: AddPage
    }
  ],
});

export default router;
