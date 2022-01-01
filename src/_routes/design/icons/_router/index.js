const childRoute = {
  path: 'icons',
  component: () => import("@/_routes/design/icons/Root"),
  // redirect: '/design/main',
  children: [
    // Hone /////////////////////////////////////////////////////////////
  ]
}

const route = childRoute

export default route
