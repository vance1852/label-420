import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import SimUI from "sim-ui";
import "sim-ui/dist/style.css";
import "./style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./views/Home.vue") },
    { path: "/button", component: () => import("./views/ButtonDemo.vue") },
    { path: "/input", component: () => import("./views/InputDemo.vue") },
    { path: "/card", component: () => import("./views/CardDemo.vue") },
    { path: "/alert", component: () => import("./views/AlertDemo.vue") },
    { path: "/modal", component: () => import("./views/ModalDemo.vue") },
    { path: "/tag", component: () => import("./views/TagDemo.vue") },
  ],
});

const app = createApp(App);
app.use(router);
app.use(SimUI);
app.mount("#app");
