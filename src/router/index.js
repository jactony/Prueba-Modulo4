import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Administracion from "../views/Administracion.vue";
import Editar from "../views/Editar.vue";
import pagInexistente from "../views/pagInexistente.vue";


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/administracion",
    name: "Administracion",
    component: Administracion
  },
  {
    path: "/editar/:id",
    name: "Editar",
    props: true,
    component: Editar
  },
  {
    path: '/opinion',
    name: 'opinion',
    
    component: () => import('../views/Opinion.vue')
  },
{
  path: '*',
  component: pagInexistente
}
]

const router = new VueRouter({
  routes
})

export default router
