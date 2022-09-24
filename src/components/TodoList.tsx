import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap';
import { TodoListContext } from '../contexts/TodoListContext';

export const TodoList = () => {
	// useContext() で、コンテキストコンポーネントで設定している状態変数および関数を読み込む
	const { todoList, toggleCompleteTodoItem, removeTodoItem } = useContext(TodoListContext);

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
