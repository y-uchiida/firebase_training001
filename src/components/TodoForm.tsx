import { useContext, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';
import { TodoListContext } from '../contexts/TodoListContext';

export const TodoForm = () => {
	// useContext() で、コンテキストコンポーネントで設定しているaddTodo() を読み込む
	const { addTodo } = useContext(TodoListContext);
	const [value, setValue] = useState('');

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault();
		if (value === '') {
			return;
		}
		addTodo(value);
		setValue('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup>
				<Form.Control value={value} onChange={e => setValue(e.target.value)} />
				<Button type='submit' variant='primary'>Add</Button>
			</InputGroup>
		</Form>
	)
}
