import { useSelector } from "react-redux";
// Reducer Selectors
import { selectTask } from '../redux/task/selectors';

const BoardColumn = ({ data }) => {

    const { column } = data;
    console.log(data)
    const tasks = useSelector(selectTask);
    console.log(column.title, "=>  ", tasks);
    return (
        <section className="flex flex-col gap-3.5" >
            <header className="board-column__header">
                <h3 className="text-white">{column.title}</h3>
            </header>
            <div className="board-column__body">
                {
                    tasks.filter(task => task.column_id === column.id).map((task) => (
                        <div key={task.id} className="board-column__task">
                            <p>{task.title}</p>
                            <br />
                            <p>{task.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default BoardColumn;