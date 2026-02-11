import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import HeaderDashbaord from "../components/HeaderDashboard";
import MainDashboard from "../components/MainDashboard";


// Reducer Operations
import { fetchColumns } from '../redux/column/operations';
import { fetchTask } from '../redux/task/operations';

// Reducer Selectors
import { selectBoardItems } from '../redux/board/selectors';
import { selectColumn } from '../redux/column/selectors';
import { selectTask } from '../redux/task/selectors';

const ScreensPage = () => {
    const { boardID: board } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (board) {
            dispatch(fetchColumns(board));
            dispatch(fetchTask({ board_id: board }));
        }
    }, [dispatch, board]);

    const boards = useSelector(selectBoardItems);
    const columns = useSelector(selectColumn);
    const tasks = useSelector(selectTask);

    const currentBoard = boards.find((b) => b.id === Number(board));
    const currentBoardWithColumns = columns.filter((c) => c.board_id === Number(board));
    const currentBoardWithTasks = tasks.filter((t) => t.board_id === Number(board));

    return <div className="flex-auto overflow-auto p-6 pt-2.5">
        <HeaderDashbaord data={{ board: currentBoard }} />
        <MainDashboard data={{ board: currentBoard, column: currentBoardWithColumns, task: currentBoardWithTasks }} />
    </div>;
}

export default ScreensPage;

