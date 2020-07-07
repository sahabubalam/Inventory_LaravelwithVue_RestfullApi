let login=require('./components/auth/login.vue').default;
let register=require('./components/auth/register.vue').default;
let forget=require('./components/auth/forget.vue').default;
let home=require('./components/home.vue').default;
let logout=require('./components/auth/logout.vue').default;
//employee
let create=require('./components/employee/create.vue').default;
let index=require('./components/employee/index.vue').default;
let EditEmployee=require('./components/employee/edit.vue').default;
//supplier
let storesupplier=require('./components/supplier/create.vue').default;
let supplier=require('./components/supplier/index.vue').default;
let Editsupplier=require('./components/supplier/edit.vue').default;
//category
let storescategory=require('./components/category/create.vue').default;
let category=require('./components/category/index.vue').default;
let Editcategory=require('./components/category/edit.vue').default;
//product
let storesproduct=require('./components/product/create.vue').default;
let product=require('./components/product/index.vue').default;
let Editproduct=require('./components/product/edit.vue').default;

export const routes = [
    { path: '/', component: login, name:'/' },
    { path: '/register', component: register, name:'/register' },
    { path: '/forget', component: forget, name:'/forget' },
    { path: '/home', component: home, name:'home' },
    { path: '/logout', component: logout, name:'logout' },
    //employee
    { path: '/create', component: create, name:'create' },
    { path: '/index', component: index, name:'index' },
    { path: '/edit-employee/:id', component: EditEmployee, name:'edit-employee' },
    //supplier
    { path: '/store-supplier', component: storesupplier, name:'store-supplier' },
    { path: '/supplier', component: supplier, name:'supplier' },
    { path: '/edit-supplier/:id', component: Editsupplier, name:'edit-supplier' },
    //category
    { path: '/store-category', component: storescategory, name:'store-category' },
    { path: '/category', component: category, name:'category' },
    { path: '/edit-category/:id', component: Editcategory, name:'edit-category' },
    //product
    { path: '/store-product', component: storesproduct, name:'store-product' },
    { path: '/product', component: product, name:'product' },
    { path: '/edit-product/:id', component: Editproduct, name:'edit-product' },
  ]