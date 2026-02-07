import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import ScreenPage from "./pages/ScreenPage";

const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/task" component={<LoginPage />} />
            }
          />
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
