import { useDispatch } from "react-redux";
import { addBoard } from "../redux/board/operations";
import { Formik, Field, Form, ErrorMessage } from "formik";

const AddBoard = ({setModalIsOpen}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
      dispatch(addBoard(values));
      
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          icon: "",
          image:""
        }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col bg-[#151515] w-87.5 m-auto p-10 space-y-5 rounded-lg relative">
          <h1 className="text-white">New Board</h1>
          <img
            src="../../x-close.svg"
            className="absolute right-5 top-5"
            width={18}
            height={18}
            onClick={()=> setModalIsOpen(false)}
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
          <h4>Icons</h4>
          <label >
              <Field  type="radio" name="icon" value="Van" />
              <img src="../../../bi_grid-1x2.svg" alt="" />
              Van
            </label>
          <button
            className="bg-[#BEDBB0] w-full py-3.5 px-33.75 rounded-lg text-sm"
            type="submit"
          >
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBoard;
