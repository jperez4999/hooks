import './styles.css';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          i={i}
        />
      ))}
    </ul>
  );
};
