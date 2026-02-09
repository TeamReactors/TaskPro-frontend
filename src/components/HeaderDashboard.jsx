// Icons
import { CiFilter } from "react-icons/ci";

const HeaderDashbaord = ({ data }) => {
    const { board } = data;
    return (
        <div id="headerDasboard" className="flex justify-between items-center mb-2.5 text-white">
            <h2 className="font-medium  text-xl font-sans">{
                board ? board.title : ""
            }</h2>
            <div className="flex gap-2 items-center cursor-pointer w-auto">
                <CiFilter className="text-2xl" />
                <button className="px-3.5 py-1.5 rounded-lg bg-transparent cursor-pointer">Filter</button>
            </div>
        </div>
    )
}

export default HeaderDashbaord;