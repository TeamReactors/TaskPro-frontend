import React from 'react';
// Icons
import { IoAddOutline } from "react-icons/io5";
const MainDashboard = ({ board }) => {
    return (
        <div className=" overflow-x-auto">
            <div className="flex gap-8.5 h-[calc(100vh-200px)]">

                <div className="flex size-max justify-center cursor-pointer items-center gap-2 py-3.5 px-20 rounded-lg bg-[#121212] hover:bg-[#121212be] text-black">
                    <IoAddOutline className="text-2xl bg-amber-50 text-black rounded p-1.5 size-7" />
                    <span className="text-xs text-white"> Add another column </span>
                </div>


            </div>
        </div>
    )
};

export default MainDashboard;