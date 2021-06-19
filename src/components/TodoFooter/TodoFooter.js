import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} tasks left</p>
            <Link to="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
