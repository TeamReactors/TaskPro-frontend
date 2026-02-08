import { CiFilter } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";



const ScreensPage = () => {
    return <div className="flex-auto overflow-auto  border-solid  p-6 pt-2.5 bg-black text-white">
        <div id="headerDasboard" className="flex justify-between items-center mb-2.5">
            <h2 className="font-medium text-white text-xl font-sans">Project Office</h2>
            <div className="flex gap-2 items-center cursor-pointer w-auto">
                <CiFilter className="text-2xl" />
                <button className="px-[14px] py-[6px] rounded-lg bg-transparent cursor-pointer">Filter</button>
            </div>
        </div>
        <div className=" overflow-x-auto">
            <div className="flex gap-8.5 h-[calc(100vh-200px)]">
                <div className="flex size-max justify-center cursor-pointer items-center gap-2 py-3.5 px-20 rounded-lg bg-[#121212] hover:bg-[#121212be] text-black">
                    <IoAddOutline className="text-2xl bg-amber-50 text-black rounded p-1.5 size-7" />
                    <span className="text-xs text-white"> Add another column </span>
                </div>


            </div>
        </div>
    </div>;
}

export default ScreensPage;