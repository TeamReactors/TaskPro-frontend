import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import RestrictedRoute from "./components/RestrictedRoute";

import PrivateRoute from "./components/PrivateRoute";


import Modal from "react-modal";
import EditColumnModalForm from "./components/EditColumnModalForm";
import NeedHelpForm from "./components/NeedHelpForm";
import { refreshUser, setAuthHeader } from "./redux/auth/operations";
import { selectIsRefreshing, selectIsLoggedIn, selectToken } from "./redux/auth/selectors";


const AuthPage = lazy(() => import("./pages/AuthPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage"));

const HomePage = lazy(() => import("./pages/HomePage"));
const ScreensPage = lazy(() => import("./pages/ScreensPage"));

Modal.setAppElement("#root");

function RootRedirect() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <Navigate to={isLoggedIn ? "/home" : "/welcome"} replace />;
}

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  // Persist'ten gelen token'ı header'a yaz (F5 sonrası istekler için)
  useEffect(() => {
    if (token) setAuthHeader(token);
  }, [token]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p className="text-[#888888] w-3/7 text-center text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</p>
    
  ) :(
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/welcome" element={<WelcomePage />} />

          {/* <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/task" component={<LoginPage />} />
            }
          /> */}
          {/* <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/task"
                component={<RegisterPage />}
              />
            }
          /> */}
          <Route path="/auth/:id" element={<AuthPage />} />



          <Route path="/home" element={<PrivateRoute redirectTo="/welcome" component={<HomePage />} />}>
            <Route index element={<ScreensPage />} />
            <Route path=":boardID" element={<ScreensPage />} />
          </Route>

          {/* <Route element={<HomePage />} >
            <Route path="/home" element={<ScreensPage />} />
            <Route path="/home/:boardID" element={<ScreensPage />} />
          </Route> */}

        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
