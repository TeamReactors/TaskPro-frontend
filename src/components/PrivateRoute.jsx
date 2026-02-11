import { Navigate} from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/selectors.js'
import { useSelector } from 'react-redux'

const PrivateRoute = ({component,redirectTo}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    isLoggedIn ? component : <Navigate to={redirectTo} />
  )
}

export default PrivateRoute
