const childRoute = {
  path: 'dealer',
  component: () => import("@/_routes/design/dealer/Root"),
  redirect: '/design/dealer/layout',
  children: [
    {
      path: 'layout',
      component: () => import("@/_routes/design/dealer/Layout"),
    },
    {
      path: 'color',
      component: () => import("@/_routes/design/dealer/Color"),
    },
    {
      path: 'typograph',
      component: () => import("@/_routes/design/dealer/Typograph"),
    },
    {
      path: 'icons',
      component: () => import("@/_routes/design/dealer/Icons"),
    },
  ]
}

const route = childRoute

export default route
