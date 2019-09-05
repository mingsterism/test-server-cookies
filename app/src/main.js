import Vue from "vue";
import VueRouter from "vue-router";
import TaskPage from "@/components/Task.vue";
import NotFound from '@/components/NotFound'
import App from "./App.vue";

Vue.config.productionTip = false;

const routes = [
  { path: "/tasks", component: TaskPage }, 
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
