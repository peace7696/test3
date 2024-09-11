import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({ todos, onDel, onEdit, onMode, onSave}) => {
	return (
		<ul className="TodoList">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDel={onDel}
					onEdit={onEdit}
					onMode={onMode}
					onSave={onSave}
					
				/>
			))}
		</ul>
	);
};

export default TodoList;
