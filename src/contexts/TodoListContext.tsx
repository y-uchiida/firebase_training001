import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

/* Contextとして指定した値を、子コンポーネントでも利用できるようにする */
export const TodoListContext = createContext({} as {
	todoList: TodoItem[],
	addTodo: (text: string) => void,
	removeTodoItem: (id: string) => void,
	toggleCompleteTodoItem: (id: string) => void,
});

export const TodoListContextProvider = (props: any) => {

	const [todoList, setTodoList] = useState<TodoItem[]>([]);

	const addTodo = (text: string) => {
		const newTodo: TodoItem = { id: uuidv4(), title: text, completed: false }
		setTodoList(todoList => [...todoList, newTodo]);
	};

	const removeTodoItem = (id: string) => {
		setTodoList(todoList.filter(item => item.id !== id));
	}

	const toggleCompleteTodoItem = (id: string) => {
		setTodoList(todoList.map(item => {
			if (item.id === id) {
				item.completed = !item.completed;
			}
			return item;
		}))
	}

	return (
		// TodoListContext.Provider コンポーネントを返し、そこにchildren を入れることで、
		// value に設定した値を子コンポーネント以下でも利用できるようにする
		// 子コンポーネント側では、 useContext() で利用するコンテキストを受け取る
		<TodoListContext.Provider value={{ todoList, addTodo, removeTodoItem, toggleCompleteTodoItem }}>
			{props.children}
		</TodoListContext.Provider>
	)
}
