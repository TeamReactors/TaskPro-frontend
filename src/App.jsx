import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RestrictedRoute from "./components/RestrictedRoute";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
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
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
