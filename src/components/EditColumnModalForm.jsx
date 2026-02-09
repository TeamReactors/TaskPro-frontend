import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditColumnModalForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const AddColumnSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={AddColumnSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col bg-[#151515] w-[35%] m-auto p-[40px] space-y-5 rounded-lg relative">
          <h1 className="text-white">Edit column</h1>
          <img
              src="../../public/x-close.svg"
              className="absolute right-5 top-5"
              width={18}
              height={18}
              // onClick={() => setModalIsOpen(false)}
              alt=""
            />
          <Field
            className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238] "
            name="name"
            type="text"
            placeholder="Title"
          />
          <ErrorMessage
            name="name"
            component="span"
            className="text-red-500 text-sm"
          />
          <button
            className="bg-[#BEDBB0] w-[100%]  py-[14px] px-[135px] rounded-lg text-sm "
            type="submit"
          >
            Edit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditColumnModalForm;
