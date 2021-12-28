import dealerChildRoutes       from '@/_routes/design/dealer/_router'
const baseRoutes = [
  {
    path: '/design',
    component: () => import("@/_routes/design/Root"),
    redirect: '/design/main',
    children: [
      dealerChildRoutes,
      {
        path: 'main',
        component: () => import("@/_routes/design/Main")
      },
      {
        path: 'dealer',
        component: () => import("@/_routes/design/dealer/Home")
      },
      {
        path: 'monitoring',
        component: () => import("@/_routes/design/Monitoring")
      },
      {
        path: 'icons',
        component: () => import("@/_routes/design/Icons")
      },
    ],
  },
]

const routes = baseRoutes

export default routes
