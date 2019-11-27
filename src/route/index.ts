import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { AppModule } from "@/store/modules/app";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: "",
  routes
});

router.afterEach((to, from) => {
  document.title = "锦囊团";
});

router.afterEach((to, from) => {
  if (to.path != "/home/billWatch" && to.path != "/home/billEdit") {
    AppModule.OnWatchMode();
  }
});

export default router;
