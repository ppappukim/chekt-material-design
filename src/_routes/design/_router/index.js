import dealerChildRoutes       from '@/_routes/design/dealer/_router'
const baseRoutes = [
  {
    path: '/design',
    component: () => import("@/_routes/design/Root"),
    redirect: '/design/dealer',
    children: [
      dealerChildRoutes,
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
