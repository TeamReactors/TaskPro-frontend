import { Navigate, Outlet } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/selectors.js'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    !isLoggedIn ? <Navigate to={"auth/login"} /> : <Outlet />)
}

export default PrivateRoute
