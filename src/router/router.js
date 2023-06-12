import { createRouter, createWebHistory } from "vue-router";

import { userWishPageGard } from "@/router/navGard";
import allBirthdayList from "@/pages/allBirthdayList";
import todayBirthdayList from "@/pages/todayBirthdayList";
import upComingBirthdayList from "@/pages/upComingBirthdayList";
import closeFriendBirthdayList from "@/pages/closeFriendBirthdayList";
import birthdayWish from "@/pages/birthdayWish";
import pageNotFound from "@/pages/pageNotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/all-birthday",
    },
    {
      name: "allBirthday",
      path: "/all-birthday",
      component: allBirthdayList,
    },
    {
      name: "todayBirthday",
      path: "/today-birthday",
      component: todayBirthdayList,
    },
    {
      name: "upComingBirthday",
      path: "/upcoming-birthday",
      component: upComingBirthdayList,
    },
    {
      name: "closeFriendBirthday",
      path: "/close-friend-birthday",
      component: closeFriendBirthdayList,
    },
    {
      name: "birthdayWish",
      path: "/birthday-wish/:userId",
      component: birthdayWish,
      props: true,
      beforeEnter: (to, from, next) => {
        userWishPageGard(+to.params.userId) ? next() : next(from.fullPath);
      },
    },
    {
      name: "pageNotFound",
      path: "/:pageNotFound(.*)",
      component: pageNotFound,
    },
  ],
});

export default router;
