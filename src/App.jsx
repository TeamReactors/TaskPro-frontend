import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RestrictedRoute from "./components/RestrictedRoute";
<<<<<<< HEAD
import PrivateRoute from "./components/PrivateRoute";
||||||| e01b54c
=======
import Modal from "react-modal";
import EditColumnModalForm from "./components/EditColumnModalForm";
import NeedHelpForm from "./components/NeedHelpForm";
>>>>>>> main

const AuthPage = lazy(() => import("./pages/AuthPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
<<<<<<< HEAD
const HomePage = lazy(() => import("./pages/HomePage"));
||||||| e01b54c

=======

Modal.setAppElement("#root");

>>>>>>> main
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


          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:boardID" element={<HomePage />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
