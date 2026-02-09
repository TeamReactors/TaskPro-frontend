// Icons
import { FaCircle } from "react-icons/fa";
import { TbArrowRightToArc } from "react-icons/tb";
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";

const BoardTask = ({ data }) => {
    const priorityColors = {
        "low": "#8FA1D0",
        "medium": "#E09CB5",
        "high": "#BEDBB0",
        "without": "#FFFFFF4D",
    };
    return (
        <div className={"flex flex-col   w-full px-5 gap-3.5  py-4.5 rounded-lg justify-between p size-max text-white bg-[#121212] hover:bg-[#121212be] border-l-8"} style={{
            borderColor: priorityColors[data.priority] || priorityColors.without,
        }}>
            <div className="flex flex-col gap-2 border-b-2 pb-3.5 border-[#FFFFFF1A]">
                <h3 className="text-white font-bold">{data.title}</h3>
                <p className="text-[#ffffff50]"> {data.description} </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-3.5">
                    <div className="flex flex-col">
                        <span className="text-[#ffffff50] text-[8px]">Priority</span>
                        <span className="text-sm capitalize items-center flex gap-2" >
                            <FaCircle color={priorityColors[data.priority]} /> {data.priority}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#ffffff50] text-[8px]">Deadline</span>
                        <span className="text-sm capitalize" >
                            {data.deadline ? new Date(data.deadline).toLocaleDateString().replaceAll(".", "/") : "Without deadline"}
                        </span>
                    </div>
                </div>
                <div className="flex gap-2 mt-3.5" >
                    <TbArrowRightToArc className="text-xs cursor-pointer" />
                    <GoPencil className="text-xs cursor-pointer" />
                    <FiTrash className="text-xs cursor-pointer" />
                </div>
            </div>

        </div>
    )
}

export default BoardTask;