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
    meta: { title: "首页" },
    children: [
      {
        path: "firstPage",
        name: "FirstPage",
        component: () => import("@/pages/home/firstPage/index.vue"),
        meta: { title: "首页" }
      },
      {
        path: "billWatch",
        name: "BillWatch",
        component: () => import("@/pages/home/accountBill/billWatch/index.vue"),
        meta: { title: "账单" }
      },
      {
        path: "billEdit",
        name: "BillEdit",
        component: () => import("@/pages/home/accountBill/billEdit/index.vue"),
        meta: { title: "账单修改" }
      },
      {
        path: "personal",
        name: "Personal",
        component: () => import("@/pages/home/personal/index.vue"),
        meta: { title: "个人中心" }
      },
      {
        path: "billCorret",
        name: "BillCorret",
        component: () => import("@/pages/home/accountBill/billCorret/index.vue")
      }
    ]
  }
];
