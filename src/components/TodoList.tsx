import { Box, Button, Input, List, ListItem } from '@chakra-ui/react';
import React, { useState } from 'react';

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: 'Deneme 1-2-3', completed: false },
    { id: 2, text: 'Deneme 4', completed: false },
  ]);
  const [input, setInput] = useState<string>('');

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Add todo item"
        maxW="600"
        borderRadius="xl"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <Button
        colorScheme="cyan"
        size="lg"
        borderRadius="xl"
        onClick={handleClick}
      >
        Add
      </Button>
      <List maxW="400">
        {todos.map((todo) => (
          <ListItem mb={5} key={todo.id}>
            {todo.text}
            <Button
              variant="outline"
              bg="red.600"
              ml={10}
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
        ;
      </List>
    </>
  );
};

export default TodoList;
