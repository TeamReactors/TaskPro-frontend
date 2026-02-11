import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
// Icons
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";

// Components
import EditColumnModalForm from "./EditColumnModalForm";

// Reducer Operations
import { deleteColumn } from "../redux/column/operations";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.65)",
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

const BoardColumn = ({ data: column }) => {
    const dispatch = useDispatch();

    const handleDelete = (columnId) => {
        dispatch(deleteColumn(String(columnId)));
    }

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    return (
        <>
            <Modal isOpen={editModalIsOpen} onRequestClose={() => setEditModalIsOpen(false)} style={customStyles}>
                <EditColumnModalForm column={column} columnID={column.id} onClose={() => setEditModalIsOpen(false)} />
            </Modal>

            <div className="flex w-full px-5 gap-28 py-4.5 rounded-lg justify-between p size-max bg-[#121212] hover:bg-[#121212be]">
                <h3 className="text-white">{column.title}</h3>
                <div className="flex items-center gap-2">
                    <GoPencil className="text-white cursor-pointer hover:text-gray-400" onClick={() => setEditModalIsOpen(true)} />
                    <FiTrash className="text-white cursor-pointer hover:text-gray-400" onClick={() => handleDelete(column.id)} />
                </div>
            </div>
        </>
    );
};

export default BoardColumn;