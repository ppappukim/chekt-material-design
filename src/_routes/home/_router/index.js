const baseRoutes = [
  {
    path: '/home',
    component: () => import("@/_routes/home/Root"),
  },
]
  
const routes = baseRoutes

export default routes
  