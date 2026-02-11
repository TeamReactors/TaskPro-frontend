import { useState } from 'react';
import Modal from 'react-modal';
// Components
import AddColumnModalForm from './AddColumnModalForm';
import BoardColumn from './BoardColumn';
import BoardTask from './BoardTask';
// Icons
import { IoAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

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


const MainDashboard = ({ data }) => {
    const { board, column, task } = data;

    const [addColumnModalIsOpen, setAddColumnModalIsOpen] = useState(false);

    return (
        <>
            <Modal isOpen={addColumnModalIsOpen} onRequestClose={() => setAddColumnModalIsOpen(false)} style={customStyles} >
                <AddColumnModalForm onClose={() => setAddColumnModalIsOpen(false)} boardID={board ? board.id : null} />
            </Modal>
            <div className=" overflow-x-auto">
                {
                    !board ? (
                        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                            <p className="text-[#888888] w-3/7 text-center text-xl">
                                Before starting your project, it is essential <Link to={"#"} className='text-[#BEDBB0] '>to create a board</Link> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
                            </p>
                        </div>
                    ) : (
                        <div className="flex gap-8.5 h-[calc(100vh-200px)]">
                            {
                                column.map((c) => (
                                    <section key={c.id} className='flex flex-col gap-3.5'>
                                        <BoardColumn data={c} />
                                        <div className="flex flex-col gap-3.5">
                                            {
                                                task.filter((t) => t.column_id === c.id).map((t) => (
                                                    <BoardTask key={t.id} data={t} />
                                                ))
                                            }
                                        </div>
                                        <div className='flex w-full p-3.5 bg-[#BEDBB0] rounded-lg justify-center cursor-pointer items-center gap-2'>
                                            <IoAddOutline className="text-2xl bg-black text-white rounded p-2 size-7" />
                                            <span className="text-sm text-black"> Add another card </span>
                                        </div>
                                    </section>
                                ))
                            }
                            <div className="flex size-max min-w-72 justify-center cursor-pointer items-center gap-2 py-3.5 px-20 rounded-lg bg-[#121212] hover:bg-[#121212be] text-black"
                                onClick={() => setAddColumnModalIsOpen(true)}>
                                <IoAddOutline className="text-2xl bg-amber-50 text-black rounded p-1.5 size-7" />
                                <span className="text-xs text-white w-full"> Add another column </span>
                            </div>


                        </div>
                    )
                }

            </div>
        </>
    )
};

export default MainDashboard;