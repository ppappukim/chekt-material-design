const childRoute = {
  path: 'monitoring',
  component: () => import("@/_routes/design/monitoring/Root"),
  children: [
    // Hone /////////////////////////////////////////////////////////////
  ]
}

const route = childRoute

export default route
