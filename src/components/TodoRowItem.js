function TodoRowItem(props){
    return(
        <tr>
            <th scope="row">{props.rowNo}</th>
            <td>{props.description}</td>
            <td>{props.assignedTo}</td>
        </tr>
    )
}

export default TodoRowItem