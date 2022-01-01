const childRoute = {
  path: 'enduser',
  component: () => import("@/_routes/design/enduser/Root"),
  // redirect: '/design/main',
  children: [
    // Hone /////////////////////////////////////////////////////////////
  ]
}

const route = childRoute

export default route
