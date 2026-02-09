import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// Reducer Operations
import { useDispatch } from "react-redux";
import { addColumn } from "../redux/column/operations";

// const customStyles = {
//     overlay: {
//         backgroundColor: "rgba(0,0,0,0.95)",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         zIndex: 1000,
//         backdropFilter: "blur(3px)",
//         WebkitBackdropFilter: "blur(3px)",
//     },
//     content: {
//         border: "none",
//         background: "transparent",
//         inset: 0,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 0,
//     },
// };

const AddColumnModalForm = ({ onClose, boardID }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addColumn({ ...values, board_id: String(boardID) }));
    actions.resetForm();
    onClose();
  };

  const AddColumnSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
        }}
        validationSchema={AddColumnSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col bg-[#151515] w-87.5 m-auto p-10 space-y-5 rounded-lg relative">
          <h1 className="text-white">Add column</h1>
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
            className="bg-[#BEDBB0] w-full py-3.5 px-33.75 rounded-lg text-sm"
            type="submit"
          >
            Add
          </button>
        </Form>
      </Formik>

    </div>
  );
};

export default AddColumnModalForm;
