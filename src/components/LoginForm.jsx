import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col bg-[#151515] w-[35%] m-auto p-[40px] space-y-5  rounded-lg relative top-40">
          <Link className="text-white" to="/auth/register">
            Registration
          </Link>
          <h6 className="text-white text-lg">Log In</h6>
          <Field
            className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238] "
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Field
            className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238]"
            name="password"
            placeholder="Confirm a password"
          />

          <button
            className="bg-[#BEDBB0] w-[100%]  py-[14px] px-[135px] rounded-lg text-sm "
            type="submit"
          >
            Log In Now
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
