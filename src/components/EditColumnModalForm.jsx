import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// Reducer Operations
import { updateColumn } from "../redux/column/operations";


const EditColumnModalForm = ({ onClose, columnID }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {

    dispatch(
      updateColumn({ id: String(columnID), title: values.title })
    );
    onClose();
    actions.resetForm();
  };

  const EditColumnSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
        }}
        validationSchema={EditColumnSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col bg-[#151515] w-87.5 m-auto p-10 space-y-5 rounded-lg relative">
          <h1 className="text-white">Edit column</h1>
          <img
            src="../../public/x-close.svg"
            className="absolute right-5 top-5"
            width={18}
            height={18}
            onClick={onClose}
            alt=""
          />
          <Field
            className="text-white rounded-lg px-4.5 py-3.5 border-2 border-[#3C4238] "
            name="title"
            type="text"
            placeholder="Title"
          />
          <ErrorMessage
            name="title"
            component="span"
            className="text-red-500 text-sm"
          />
          <button
            className="bg-[#BEDBB0] w-full  py-3.5 px-33.75 rounded-lg text-sm "
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
