const baseRoutes = [
  {
    path: '/design',
    component: () => import("@/_routes/design/Root"),
    redirect: '/design/dealer',
    children: [
      {
        path: 'dealer',
        component: () => import("@/_routes/design/Dealer")
      },
      {
        path: 'monitoring',
        component: () => import("@/_routes/design/Monitoring")
      },
      {
        path: 'enduser',
        component: () => import("@/_routes/design/Enduser")
      },
    ],
  },
]
  
const routes = baseRoutes

export default routes
