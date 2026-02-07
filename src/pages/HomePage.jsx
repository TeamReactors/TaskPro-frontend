
import Sidebar from "../components/UI/Sidebar";
import ScreensPage
    from "../components/UI/ScreensPage";
const HomePage = () => {
    return (
        <div className="flex h-[100vh] flex-col border-2 border-solid border-gray-300">
            <div className="flex h-[70px] border-solid border-gray-300  bg-gray-600"></div>
            <div className="flex flex-3/12">
                <Sidebar />
                <ScreensPage />
            </div>
        </div>
    )
};

export default HomePage;