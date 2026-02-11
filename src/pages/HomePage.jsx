import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Reducer Operations
import { fetchBoard } from "../redux/board/operations";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBoard());
    }, [dispatch]);

    return (
        <div className="flex h-screen flex-col border-2  ">
            <Header />
            <div className="flex flex-3/12">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
};

export default HomePage;