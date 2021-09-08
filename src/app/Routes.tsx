import { Route, Switch, useLocation } from 'react-router-dom'
// import home from '../pages/home'
import auth from '../pages/auth'
// import indexPage from '../pages'
import home from '../pages/home'
import profile from '../pages/profile'
import Layout from '../components/layout'

const routes: any[] = [
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
    layout: Layout
    // exact: true
  }
];

function RouteWithSubRoutes (route: { component?: any; routes?: any; path?: any; layout: any}) {
  const { path } = route
  return (
    <Route
      path={path}
      render={(props) => {
        // pass the sub-routes down to keep nesting
        if (route?.layout) {
          return (
            <route.layout>
              <route.component {...props} routes={route.routes} />
            </route.layout>
          )
        }
        return (
          <route.component {...props} routes={route.routes} />
        )
      }}
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

const Routes = () => {
  const location = useLocation()
  return (
    <Switch location={location}>
      {
        routes?.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))
      }
      <Route path="*" component={Page404} />
    </Switch>
  )
}

export default Routes
