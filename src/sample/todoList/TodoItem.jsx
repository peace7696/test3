import { useState } from 'react';

const TodoItem = ({ todo, onDel, onEdit, onMode, onSave }) => {
	const { text, isDone, id, isMod } = todo;
	const [txt, setTxt] = useState(text);

	return (
		<li className={isDone ? 'on' : ''}>
			<div>
				<input type="checkbox" checked={isDone} onChange={(e) => onEdit(e, id)} />
				{!isMod ? (
					<p>
						<em>{text}</em>
						<button onClick={() => onMode(id)}>수정</button>
					</p>
				) : (
					<p>
						<input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
						{/* (e) => setTxt(e.target.value) */} {/* 글씨 써지게  */}
						<button onClick={() => onSave(id,txt)}>저장</button>
					</p>
				)}
			</div>
			<button onClick={() => onDel(id)}>삭제</button>
		</li>
	);
};

export default TodoItem;
