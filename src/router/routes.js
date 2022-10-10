import { createRouter, createWebHistory } from "vue-router";

import Login from '../pagues/Login.vue'
import Desarrollo from '../pagues/Desarrollo.vue'




  const routes = [
    {
      path:'/',      
      component:Login
    }, 
    {
      path:'/desarrollo',
      component:Desarrollo
    }
  ]

  const router = createRouter ({
    history:createWebHistory(),
    routes:routes
  })
  
  export default router

