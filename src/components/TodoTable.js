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
            <TodoRowItem
                rowNo={props.todoList[0].rowNo}
                description={props.todoList[0].description}
                assignedTo={props.todoList[0].assignedTo} />

            <TodoRowItem
                rowNo={props.todoList[1].rowNo}
                description={props.todoList[1].description}
                assignedTo={props.todoList[1].assignedTo} />

            <TodoRowItem
                rowNo={props.todoList[2].rowNo}
                description={props.todoList[2].description}
                assignedTo={props.todoList[2].assignedTo} />

        </tbody>
    </table>
    )
}

export default TodoTable