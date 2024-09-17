import { Navigate } from 'react-router-dom';
import { getUserData } from '../Utils/Storage/LocalStore';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const user = getUserData();

  return user && user.userLoggedIn ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
