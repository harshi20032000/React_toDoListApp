import './App.css';
import TodoTable from './components/TodoTable';

const todoList =[{rowNo:1, description:"water plants", assignedTo:"User 1"},
  {rowNo:2, description:"take dog out", assignedTo:"User 2"},
  {rowNo:3, description:"get haircut", assignedTo:"User 1"},
  {rowNo:34, description:"shake bilbul", assignedTo:"User 3"}
];

function App() {
  return (
    <div className="mt-5 container">
      <div className="card">
      <div className="card-header">
       Your todo's
      </div>
      <div className="card-body">
       <TodoTable todoList = {todoList}/>
      </div>
      </div>
    </div>
  );
}

export default App;
