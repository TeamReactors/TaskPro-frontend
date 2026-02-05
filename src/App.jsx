import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute";

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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
