import './App.css';
import {useState, useEffect} from 'react';
import TodoItem from './ToDoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const onDeleteClick = (id) => {
    // filter the todos array to remove the todo with the provided `id`
    const filteredTodos = todos.filter(todo => todo.id !== id);
  
    // set state with the new array
    setTodos(filteredTodos);
  };

  useEffect(() => {
    fetch('/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const todoItemComponentsArr = todos.map((todo) => {
    return <TodoItem key={todo.id} task={todo.task} />;
  });

  return (
    <div className="App">
      <ul>
        {todoItemComponentsArr}
      </ul>
    </div>
  );
}

export default App;