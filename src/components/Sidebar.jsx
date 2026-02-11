import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/img/logo.jpg"
import { selectBoardItems } from "../redux/board/selectors";
import { logout } from "../redux/auth/operations";
import Modal from "react-modal";
import AddBoard from "./AddBoardModal";
import { useState } from "react";
import { Link } from "react-router-dom";

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


    const handleClick = () => {
        dispatch(logout());
    }
  return (
      <div className="w-62.5 flex flex-col border-solid border-gray-300 bg-[#121212]">
          <img className="mt-5 mb-3 ml-2" src={logo} width={104} height={32} alt="logo" />
          <p className="text-sm text-[#888888] mt-5 mb-3 ml-2">
              My boards
          </p>
          <div>
              <p>
                  Create a new board
              </p>
              <button onClick={()=> setModalIsOpen(true)}>Add Board</button>
          </div>
          <ul>
              {
                  boards.map((board) => (
                      <li key={board.id} className="text-sm text-[#888888] mt-5 mb-3 ml-2">
                          <Link to={`${board.id}`}>
                              {board.title}
                            </Link>
                          
                      </li>
                    ))
              }
          </ul>
          <button onClick={handleClick}>Log Out</button>

          <Modal isOpen={modalIsOpen}   onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <AddBoard setModalIsOpen={setModalIsOpen} />
          </Modal>
    </div>
  );
};
export default Sidebar;
