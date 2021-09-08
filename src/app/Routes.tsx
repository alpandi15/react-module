import {
  Route, Routes, BrowserRouter
} from 'react-router-dom'
// import home from '../pages/home'
import auth from '../pages/auth'
// import indexPage from '../pages'
import home from '../pages/home'
import profile from '../pages/profile'
import Layout from '../components/layout'

const appRoutes: any[] = [
  {
    path: '/',
    component: home.Home,
    layout: Layout,
    exact: true
  },
  {
    path: '/auth/login',
    component: auth.Login,
    exact: true
  },
  {
    path: '/profile',
    component: profile.Profile,
    layout: Layout,
    children: [
      { path: '/user', component: profile.User }
    ]
    // exact: true
  }
];

function RouteWithSubRoutes (route: { component?: any; routes?: any; path?: any; layout: any}) {
  const {
    path, layout, routes, ...props
  } = route

  const Element = () => {
    // pass the sub-routes down to keep nesting
    if (layout) {
      return (
        <route.layout>
          <route.component {...props} routes={route.routes} />
        </route.layout>
      )
    }
    return (
      <route.component {...props} routes={routes} />
    )
  }

  return (
    <Route
      path={path}
      element={<Element />}
    />
  );
}

const Page404 = () => {
  return (
    <div>
      Page Not Fond
    </div>
  )
}

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          appRoutes?.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
        }
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
