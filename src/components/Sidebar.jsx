import { useDispatch, useSelector } from "react-redux";
// import logo from "../assets/img/logo.jpg"
import needHelpLogo from "../assets/img/needHelpIcon.png";
import { selectBoardItems } from "../redux/board/selectors";
import { logout } from "../redux/auth/operations";
import Modal from "react-modal";
import AddBoard from "./AddBoardModal";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Icons
import { GoDotFill } from "react-icons/go";
import { TbPencil } from "react-icons/tb";
import { LuTrash } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

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

const Sidebar = () => {

    const boards = useSelector(selectBoardItems);

    const dispatch = useDispatch();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const location = useLocation();


    const activeBoard = location.pathname.split("/")[2];
    const handleClick = () => {
        dispatch(logout());
    }
    return (
        <div className="max-w-65 flex flex-col gap-10 border-solid border-gray-300 bg-[#121212]">
            {/* <img className="mt-5 mb-3 ml-2" src={logo} width={104} height={32} alt="logo" /> */}
            <div className="w-full flex flex-col px-6 mt-10">
                <p className="text-sm text-[#888888] mt-5 mb-3 ">
                    My boards
                </p>
                <hr className="w-full border-gray-700" />
                <div className="w-full flex justify-between py-3.5">
                    <p className="text-sm w-4/12 text-white">
                        Create a new board
                    </p>
                    <button onClick={() => setModalIsOpen(true)} className="flex items-center gap-2 py-2 px-2.5 bg-[#BEDBB0] hover:bg-[#BEDBB0]/40 rounded-lg  text-black hover:text-white cursor-pointer ">
                        <IoAdd className="size-5 " />
                    </button>
                </div>
                <hr className="w-full border-gray-700" />

            </div>
            <ul className="w-full d-flex flex-col flex-1">
                {
                    boards.map((board) => (
                        console.log(activeBoard, board.id),
                        <Link key={board.id} to={`${board.id}`}>
                            <li className={`flex items-center justify-between text-sm px-4 py-5 ${Number(activeBoard) === board.id ? "border-r-5 border-primary text-white" : "text-[#ffffff50]"}`}>
                                <div className="flex items-center gap-2 py-2">
                                    <GoDotFill className="text-primary " />
                                    {board.title}
                                </div>
                                {
                                    Number(activeBoard) === board.id &&
                                    <div className="w-auto flex gap-2 text-[#ffffff50]">
                                        <TbPencil className="cursor-pointer size-4 hover:text-white" />
                                        <LuTrash className="cursor-pointer size-4 hover:text-white" />
                                    </div>
                                }
                            </li>
                        </Link>
                    ))
                }
            </ul>

            <div className="w-full h-auto p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-3.5 bg-[#1F1F1F] rounded-lg p-5">
                    <img src={needHelpLogo} className="size-15" />

                    <p className="text-white text-sm">
                        If you need help with <span className="text-[#BEDBB0]">
                            TaskPro
                        </span>, check out our support resources or reach out to our customer support team.
                    </p>

                    <p className="text-white text-sm flex items-center gap-2">
                        <FaRegCircleQuestion className="size-5" /> Need help?
                    </p>
                </div>
                <button onClick={handleClick} className="flex items-center gap-2 py-2 px-2.5 text-white hover:text-[#BEDBB0] cursor-pointer ">
                    <TbLogout className="size-8 text-[#BEDBB0]" />
                    <span className="text-sm">Log Out</span>
                </button>
            </div>



            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <AddBoard setModalIsOpen={setModalIsOpen} />
            </Modal>
        </div >
    );
};
export default Sidebar;
