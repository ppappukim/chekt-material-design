const childRoute = {
  path: 'dealer',
  component: () => import("@/_routes/design/dealer/Root"),
  redirect: '/design/dealer/layout',
  children: [
    // system /////////////////////////////////////////////////////////////
    {
      path: 'layout',
      component: () => import("@/_routes/design/dealer/system/Layout"),
    },
    {
      path: 'color',
      component: () => import("@/_routes/design/dealer/system/Color"),
    },
    {
      path: 'typograph',
      component: () => import("@/_routes/design/dealer/system/Typograph"),
    },
    {
      path: 'icons',
      component: () => import("@/_routes/design/dealer/system/Icons"),
    },
    
    // components /////////////////////////////////////////////////////////////
    {
      path: 'badge',
      component: () => import("@/_routes/design/dealer/components/Badge"),
    },
    {
      path: 'buttons',
      component: () => import("@/_routes/design/dealer/components/Buttons"),
    },
    {
      path: 'cards',
      component: () => import("@/_routes/design/dealer/components/Cards"),
    },
    {
      path: 'checkboxes',
      component: () => import("@/_routes/design/dealer/components/Checkboxes"),
    },
    {
      path: 'datatable',
      component: () => import("@/_routes/design/dealer/components/DataTable"),
    },
    {
      path: 'datepicker',
      component: () => import("@/_routes/design/dealer/components/DatePicker"),
    },
    {
    path: 'dialog',
      component: () => import("@/_routes/design/dealer/components/Dialog"),
    },
    {
      path: 'label',
      component: () => import("@/_routes/design/dealer/components/Label"),
    },
    {
      path: 'loading',
      component: () => import("@/_routes/design/dealer/components/Loading"),
    },
    {
      path: 'modal',
      component: () => import("@/_routes/design/dealer/components/Modal"),
    },
    {
      path: 'range',
      component: () => import("@/_routes/design/dealer/components/Range"),
    },
    {
      path: 'toast',
      component: () => import("@/_routes/design/dealer/components/Toast"),
    },
    {
      path: 'badge',
      component: () => import("@/_routes/design/dealer/components/Badge"),
    },
    {
      path: 'radio',
      component: () => import("@/_routes/design/dealer/components/Radio"),
    },
    {
      path: 'avatar',
      component: () => import("@/_routes/design/dealer/components/Avatar"),
    },
    {
      path: 'select',
      component: () => import("@/_routes/design/dealer/components/Select"),
    },
    {
      path: 'tab',
      component: () => import("@/_routes/design/dealer/components/Tab"),
    },
    {
      path: 'textinput',
      component: () => import("@/_routes/design/dealer/components/TextInput"),
    },
    {
      path: 'toggle',
      component: () => import("@/_routes/design/dealer/components/Toggle"),
    },
    {
      path: 'tooltip',
      component: () => import("@/_routes/design/dealer/components/Tooltip"),
    },
  ]
}

const route = childRoute

export default route
