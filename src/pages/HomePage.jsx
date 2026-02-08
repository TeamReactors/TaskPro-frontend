import { useParams } from "react-router-dom";

// Components

import Sidebar from "../components/Sidebar";
import ScreensPage from "../components/ScreensPage";
import Header from "../components/Header";

const HomePage = () => {

    const { boardID } = useParams();

    return (
        <div className="flex h-[100vh] flex-col border-2 border-solid border-gray-300">
            {/* <Header /> */}
            <div className="flex flex-3/12">
                {/* <Sidebar /> */}
                <ScreensPage board={boardID} />
            </div>
        </div>
    )
};

export default HomePage;