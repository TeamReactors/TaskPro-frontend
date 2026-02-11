import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Reducer Operations
import { fetchBoard } from "../redux/board/operations";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);

  return (
    <div className="flex h-screen flex-col border-2 bg-[#1F1F1F] ">
      <Header />
      <div className="flex flex-3/12">
        <Sidebar />
        <Outlet />
        {/* <p className="text-[#888888] w-3/7 text-center text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Before starting your project, it is essential
          <span className="text-[#BEDBB0] mx-1 ">
            to create a board
          </span>
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p> */}
      </div>
    </div>
  );
};

export default HomePage;
