let login=require('./components/auth/login.vue').default;
let register=require('./components/auth/register.vue').default;
let forget=require('./components/auth/forget.vue').default;
let home=require('./components/home.vue').default;
let logout=require('./components/auth/logout.vue').default;
//employee
let create=require('./components/employee/create.vue').default;
let index=require('./components/employee/index.vue').default;

export const routes = [
    { path: '/', component: login, name:'/' },
    { path: '/register', component: register, name:'/register' },
    { path: '/forget', component: forget, name:'/forget' },
    { path: '/home', component: home, name:'home' },
    { path: '/logout', component: logout, name:'logout' },
    { path: '/create', component: create, name:'create' },
    { path: '/index', component: index, name:'index' }
  ]