const Home = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home.vue')
const Notifications = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Notifiaction.vue')
const Message = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Message.vue')

const PageNotFound = () => import(/* webpackChunkName: "vsf-not-found" */ 'theme/pages/PageNotFound.vue')
const ErrorPage = () => import(/* webpackChunkName: "vsf-error" */ 'theme/pages/Error.vue')

let routes = [
  { name: 'home', path: '/', component: Home, alias: '/pwa.html' },
  { name: 'notifications', path: '/notifications', component: Notifications, alias: '/pwa.html' },
  { name: 'message', path: '/message', component: Message, alias: '/pwa.html' },
  { name: 'error', path: '/error', component: ErrorPage, meta: { layout: 'minimal' } },
  { name: 'page-not-found', path: '*', component: PageNotFound }
]

export default routes
