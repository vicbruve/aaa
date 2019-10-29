export default [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/index.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/pages/register/index.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/home/index.vue")
  }
];
