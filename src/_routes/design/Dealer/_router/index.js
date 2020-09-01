const baseRoutes = [
  {
    path: '/design/dealer',
    component: () => import("@/_routes/design/dealer/Root"),
    redirect: '/design/dealer/layout',
    children: [
      {
        path: 'layout',
        component: () => import("@/_routes/design/Layout")
      },
      {
        path: 'color',
        component: () => import("@/_routes/design/Color")
      },
      {
        path: 'typograph',
        component: () => import("@/_routes/design/Typograph")
      },
    ],
  },
]
  
const routes = baseRoutes

export default routes
