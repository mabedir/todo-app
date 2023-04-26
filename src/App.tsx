import TodoList from './components/TodoList';
import { Heading, IconButton, VStack, useColorMode } from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4} pb={28}>
      <IconButton
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        size="md"
        alignSelf="flex-end"
        onClick={toggleColorMode}
        aria-label={''}
      />

      <Heading
        p="5"
        fontWeight="extrabold"
        size="3xl"
        bgGradient="linear(to-l, teal.300, blue.500)"
        bgClip="text"
      >
        Todo List
      </Heading>
      <TodoList />
    </VStack>
  );
}

export default App;
