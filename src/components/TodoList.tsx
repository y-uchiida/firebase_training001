import React from 'react'
import { Button, Table } from 'react-bootstrap';

interface props {
	setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>,
	todoList: TodoItem[],
	removeTodoItem: (id: string) => void,
	toggleCompleteTodoItem: (id: string) => void,
};

export const TodoList = ({ setTodoList, todoList, removeTodoItem, toggleCompleteTodoItem }: props) => {

	return (
		<Table>
			<tbody>
				<>
					{todoList ?
						todoList.map((item) => {
							return <tr key={item.id}>
								<td className='text-start'>
									{item.completed ?
										<s>{item.title}</s>
										:
										<>{item.title}</>
									}
								</td>
								<td className='text-end'>
									<Button
										variant={item.completed ? 'secondary' : 'success'}
										className='me-2'
										onClick={() => toggleCompleteTodoItem(item.id)}
									>
										{item.completed ? '完了' : '未完了'}
									</Button>
									<Button variant='danger' onClick={() => removeTodoItem(item.id)}>remove</Button>
								</td>
							</tr>
						}) :
						<p></p>
					}
				</>
			</tbody>
		</Table>

	)
}
