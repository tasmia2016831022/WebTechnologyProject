import React from 'react';

const home = React.lazy(()=>import('./views/pages/home'));
const blogPost = React.lazy(()=>import('./views/pages/blogPost'));
const detailPost = React.lazy(()=>import('./views/pages/detailPost'));
const myPost = React.lazy(()=>import('./views/pages/myPost'));
const profile = React.lazy(()=>import('./views/pages/profile'));
const editPost = React.lazy(()=>import('./views/pages/editPost'));
const login = React.lazy(()=>import('./views/pages/login'));
const register = React.lazy(()=>import('./views/pages/register'));

const routes = [
    {path: '/' , exact:true , name: ''},
    {path: '/home', name:'home', component: home},
    {path: '/blogPost', name:'blogPost', component: blogPost},
    {path: '/detailPost', name:'detailPost', component: detailPost},
    {path: '/myPost', name:'myPost', component: myPost},
    {path: '/profile', name:'profile', component: profile},
    {path: '/editPost', name:'editPost', component: editPost},
    {path: '/login', name:'login', component: login},
    {path: '/register', name:'register', component: register},
];

export default routes;
