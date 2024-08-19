import TodoRowItem from "./TodoRowItem"
function TodoTable(props) {
    return(
        <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Assigned to</th>
            </tr>
        </thead>
        <tbody>
            {props.todoList.map(eachTodoRow =>(
                <TodoRowItem
                rowNo={eachTodoRow.rowNo}
                description={eachTodoRow.description}
                assignedTo={eachTodoRow.assignedTo} />

            ))}

        </tbody>
    </table>
    )
}

export default TodoTable