import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)




export const constantRouterMap = [

     {
         path: '/',
         name: 'index',
         component: _import('h-container/index'),
       
     },
]

export default new Router({
    routes: constantRouterMap,
    mode: 'history'
})
