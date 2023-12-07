import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookDetail from "../views/BookDetail.vue";
import BookInsert from "../views/BookInsert.vue";
import BookUpdate from "../views/BookUpdate.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/book/detail/:id",
    name: "BookDetail",
    component: BookDetail,
  },
  {
    path: "/book/insert/",
    name: "BookInsert",
    component: BookInsert,
  },
  {
    path: "/book/insert/:id?",
    name: "BookUpdate",
    component: BookUpdate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
