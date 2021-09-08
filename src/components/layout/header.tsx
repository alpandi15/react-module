import {
  // matchRoutes,
  Link
  // useLocation,
  // useResolvedPath
} from 'react-router-dom'
// import classNames from 'classnames'

interface LinkNavigateProps {
  label: string,
  to: string,
  // activeClassName: string,
  inactiveClassName: string,
  className: string
}

const NavLink = ({
  label, to, inactiveClassName, className
}: LinkNavigateProps) => {
  const getClassName = () => {
    return className + inactiveClassName
    // const match = matchRoutes({
    //   path: to,
    //   exact: activeOnlyWhenExact
    // })

    // if (match) return classNames()
  }

  return (
    <div className={getClassName()}>
      <Link to={to}>{label}</Link>
    </div>
  )
}

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div className="text-sm lg:flex-grow">
          <NavLink
            to="/"
            label="Home"
            // activeClassName="border-indigo-500 text-gray-900"
            inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
          />
          <NavLink to="/profile"
            label="Profile"
            inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <NavLink to="/auth/login"
            label="Login"
            inactiveClassName="text-gray-500 hover:text-gray-700 hover:border-gray-300"
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5  transition duration-150 ease-in-out"
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
