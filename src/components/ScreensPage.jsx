import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Icons
import { CiFilter } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";

// Components
import BoardColumn from './BoardColumn';
import HeaderDashbaord from "./HeaderDashboard";

// Reducer Operations
import { fetchColumns } from '../redux/column/operations';
import { fetchTask } from '../redux/task/operations';
// Reducer Selectors
import { selectColumn } from '../redux/column/selectors';


const ScreensPage = ({
    board
}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (board) {
            dispatch(fetchColumns(board));
            dispatch(fetchTask({ board_id: board }));
        }
    }, [dispatch, board]);

    const columns = useSelector(selectColumn);
    console.log(columns);
    return <div className="flex-auto overflow-auto  border-solid  p-6 pt-2.5 bg-black text-white">
        <HeaderDashbaord />
        
    </div>;
}

export default ScreensPage;