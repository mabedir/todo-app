import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo['complete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleEditTodo(index) {
    let newTodoList = [...todos];
    let todoToEdit = newTodoList[index];

    const updatedInput = prompt('Edit your todo:', todoToEdit.input);
    if (updatedInput === null) return; // Exit if the user cancels

    newTodoList = newTodoList.filter((_, valIndex) => valIndex !== index);

    setTodos(newTodoList);

    const editedTodo = { ...todoToEdit, input: updatedInput };
    const finalTodoList = [...newTodoList, editedTodo];
    setTodos(finalTodoList);
    handleSaveData(finalTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return;
    }
    let db = [];
    db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
