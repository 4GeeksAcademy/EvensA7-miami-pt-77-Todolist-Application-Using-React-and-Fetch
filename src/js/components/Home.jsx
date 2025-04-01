import React, { useState, useEffect } from "react";
import { ToDoInput } from "./ToDoInput";
import { ToDoList } from "./ToDoList";
import { use } from "react";

const Home = () => {
	const [toDos, setToDos] = useState([])
	const [userInput, setUserInput] = useState("");
	useEffect(() => {
		getUser()
	}, [])

	const getUser = async () => {
		let response = await fetch("https://playground.4geeks.com/todo/users/evensa7")
		let data = await response.json()
		if (data.detail == "User evensa7 doesn't exist.") {
			let response = await fetch("https://playground.4geeks.com/todo/users/evensa7", {
				method: "POST",
				headers: { "Content-type": "application/json" },

			})
		}
		else {
			console.log(data)
			setToDos(data.todos)
		}
	}

	const createToDoList = async () => {


	}
	const getList = async () => {


	}
	const addToDo = async () => { 
		let response = await fetch("https://playground.4geeks.com/todo/todos/evensa7",{
			method: "POST",
			headers: { "Content-type": "application/json" },	
			body: JSON.stringify({
				label: userInput,
				is_done: false
			})
		})
		let data = await response.json()
			getUser()
	}


	return (
		<div className="text-center">
			<input value={userInput} onChange={(e) => { setUserInput(e.target.value) }}></input>
			<button onClick={(e) => addToDo(e)}>Add To List</button>
			<ToDoList todos={
				toDos
			} 
			getUser = {getUser} />

		</div>
	);
};

export default Home;