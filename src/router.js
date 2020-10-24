import Vue from 'vue';
import Router from 'vue-router';
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import CoursesList from "./views/CoursesList";
import AddRole from "./components/AddRole";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login
    },
    {
      path: "/listas-cursos",
      name: "course-list",
      component: CoursesList
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole
        }
      ]
    }
  ]
})
