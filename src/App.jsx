import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RestrictedRoute from "./components/RestrictedRoute";
import Modal from "react-modal";
import EditColumnModalForm from "./components/EditColumnModalForm";
import NeedHelpForm from "./components/NeedHelpForm";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage"));

Modal.setAppElement("#root");

function App() {
  
  
  return (
    <>
      <NeedHelpForm></NeedHelpForm>
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
