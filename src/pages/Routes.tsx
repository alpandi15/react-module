import { Route, Switch, useLocation } from 'react-router-dom'
import home from './home'

const routes: any[] = [
  {
    path: '/home',
    component: home.Home,
    exact: true,
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

const Routes = () => {
  const location = useLocation()
  return (
    <Switch location={location}>
      {
        routes?.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))
      }
    </Switch>
  )
}

export default Routes
