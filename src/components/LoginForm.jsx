import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const LoginForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {

    console.log(values)

    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully login!", { duration: 2000 });
        navigate("/home", { replace: true })
      })
      .catch(e => {
        if (e === "Request failed with status code 404") {
          toast.error("User with this email does not exist", { duration: 2000 })
        } else if (e === "Request failed with status code 401") {
          toast.error("Incorrect password", { duration: 2000 })
        }
      })

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
          <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />

          <Field
            className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238]"
            name="password"
            placeholder="Confirm a password"
            type="password"
          />
          <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />

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
