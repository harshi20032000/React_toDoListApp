import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';




function App() {
 const [todoList, setTodoList] = useState( [
  {rowNo:1, description:"water plants", assignedTo:"User 1"},
  {rowNo:2, description:"take dog out", assignedTo:"User 2"},
  {rowNo:3, description:"get haircut", assignedTo:"User 1"},
  {rowNo:4, description:"shake bilbul", assignedTo:"User 3"}
]);
  
  const addTodo =() =>{
    if(todoList.length>=1){
      const newTodoRow ={
        rowNo: todoList.length+1,
        description: "new description",
        assignedTo:"new user"
      };
      setTodoList(todoList =>[...todoList, newTodoRow]);
    }
  }

  return (
    <div className="mt-5 container">
      <div className="card">
      <div className="card-header">
       Your todo's
      </div>
      <div className="card-body">
       <TodoTable todoList = {todoList}/>
       <button className="btn btn-primary" onClick={addTodo}>Add new todo</button>
      </div>
      </div>
    </div>
  );
}

export default App;
