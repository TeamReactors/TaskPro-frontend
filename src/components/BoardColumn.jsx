import { useState } from 'react';


const BoardColumn = ({ data }) => {

    const { tasks, column } = data;
    console.log(data)
    return (
        <section className="flex flex-col gap-3.5" >
            <header className="board-column__header">
                <h3 className="text-white">{data.column.title}</h3>
            </header>
            <div className="board-column__body">

            </div>
        </section>
    );
};

export default BoardColumn;