import { Route, Switch, useLocation } from 'react-router-dom'
import home from '../pages/home'
import auth from '../pages/auth'
import indexPage from '../pages'

const routes: any[] = [
  {
    path: '/auth/login',
    component: auth.Login,
    exact: true
  },
  {
    path: '/',
    component: indexPage,
    exact: true
  },
  {
    path: '/home',
    component: home.Home,
    routes: [
      {
        path: '/home/profile',
        component: home.Home
      },
      {
        path: '/home/settings',
        component: home.Home
      }
    ]
  }
];

function RouteWithSubRoutes (route: { component?: any; routes?: any; path?: any; }) {
  const { path } = route
  return (
    <Route
      path={path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
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
