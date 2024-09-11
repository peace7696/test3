import { useRef, useState } from 'react';
import './TodoInput.scss';

const TodoInput = ({ onAdd }) => {
	const [text, setText] = useState('');
	const textRef = useRef(null);
	const changeInput = (e) => {
		setText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		onAdd(text);
		setText('');
		textRef.current.focus();
	};
	return (
		<form className="TodoInput" onSubmit={onSubmit}>
			<input type="text" value={text} onChange={changeInput} ref={textRef} />
			<button type="submit">추가</button>
		</form>
	);
};

export default TodoInput;
