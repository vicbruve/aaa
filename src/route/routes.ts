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
    component: () => import("@/pages/home/index.vue"),
    children: [
      {
        path: "firstPage",
        name: "FirstPage",
        component: () => import("@/pages/home/firstPage/index.vue")
      },
      {
        path: "billWatch",
        name: "BillWatch",
        component: () => import("@/pages/home/accountBill/billWatch/index.vue")
      },
      {
        path: "billEdit",
        name: "BillEdit",
        component: () => import("@/pages/home/accountBill/billEdit/index.vue")
      },
      {
        path: "personal",
        name: "Personal",
        component: () => import("@/pages/home/personal/index.vue")
      }
    ]
  }
];
