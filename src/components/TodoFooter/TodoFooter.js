import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            {
                typeof numberOfIncompleteTasks === "number" && !Number.isNaN(numberOfIncompleteTasks) ?
                    <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
                : <p></p>
            }
            <Link to="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
