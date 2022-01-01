import dealerChildRoutes       from '@/_routes/design/dealer/_router'
import monitoringChildRoutes       from '@/_routes/design/monitoring/_router'
import enduserChildRoutes       from '@/_routes/design/enduser/_router'
import iconsChildRoutes       from '@/_routes/design/icons/_router'
const baseRoutes = [
  {
    path: '/design',
    component: () => import("@/_routes/design/Root"),
    redirect: '/design/main',
    children: [
      dealerChildRoutes,
      enduserChildRoutes,
      monitoringChildRoutes,
      iconsChildRoutes,
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
        component: () => import("@/_routes/design/monitoring/Root")
      },
      {
        path: 'enduser',
        component: () => import("@/_routes/design/enduser/Root")
      },
      {
        path: 'icons',
        component: () => import("@/_routes/design/icons/Root")
      },
    ],
  },
]

const routes = baseRoutes

export default routes
