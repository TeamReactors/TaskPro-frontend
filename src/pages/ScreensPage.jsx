import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import ScreensPage from "../components/ScreensPage";

// Reducer Operations
import { fetchBoard } from "../redux/board/operations";

const HomePage = () => {
    const dispatch = useDispatch();
    const { boardID } = useParams();

    useEffect(() => {
        dispatch(fetchBoard());
    }, [dispatch]);
    
    return (
        <div className="flex h-[100vh] flex-col border-2  ">
            {/* <Header /> */}
            <div className="flex flex-3/12">
                {/* <Sidebar /> */}
                <ScreensPage board={boardID} />
            </div>
        </div>
    )
};

export default HomePage;