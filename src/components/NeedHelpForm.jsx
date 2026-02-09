import Modal from "react-modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.95)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
  },
  content: {
    border: "none",
    background: "transparent",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
};

const NeedHelpForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const NeedHelpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <Formik
          initialValues={{
            email: "",
            message: "",
          }}
          validationSchema={NeedHelpSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col bg-[#151515] w-[35%] m-auto p-[40px] space-y-5 rounded-lg relative">
            <h1 className="text-white">Need help</h1>
            <img
              src="../../public/x-close.svg"
              className="absolute right-5 top-5"
              width={18}
              height={18}
              onClick={() => setModalIsOpen(false)}
              alt=""
            />
            <Field
              className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238] "
              name="name"
              type="text"
              placeholder="Email Address"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-500 text-sm"
            />
            <Field
              className="text-white rounded-lg px-[18px] py-[14px] border-2 border-[#3C4238] "
              name="name"
              type="text"
              placeholder="Comment"
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
              Send
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default NeedHelpForm;
