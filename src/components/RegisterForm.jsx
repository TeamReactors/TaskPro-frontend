import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    console.log(values);

    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully register!",{duration:2000});
        navigate("/task", { replace: true });
        
      })
      .catch((e) => {
        if (e === "Request failed with status code 409") {
          toast.error("User with this email already exists",{duration:2000});
        }
      });
    actions.resetForm();
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col bg-[#151515] w-[35%] m-auto p-[40px] space-y-5  rounded-lg relative top-30">
          <Link className="text-white" to="/auth/login">
            Log In
          </Link>
          <h6 className="text-white text-lg">Register</h6>
          <Field
            className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238] "
            name="name"
            placeholder="Enter your name"
            type="text"
          />
          <ErrorMessage name="name" component="span" className="text-red-500 text-sm" />
          <Field
            className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238] "
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />

          <Field
            className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238]"
            name="password"
            placeholder="Enter a password"
            type="password"
          />
          <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />

          <button
            className="bg-[#BEDBB0] w-[100%]  py-[14px] px-[135px] rounded-lg text-sm "
            type="submit"
          >
            Register Now
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
