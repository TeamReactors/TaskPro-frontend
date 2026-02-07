import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import ScreenPage from "./pages/ScreenPage";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/welcome" element={<WelcomePage/>} />
          
          
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
          <Route component={<PrivateRoute />}>
            <Route path="/home" component={""} />
            <Route path="/home/:boardID" component={<ScreenPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
