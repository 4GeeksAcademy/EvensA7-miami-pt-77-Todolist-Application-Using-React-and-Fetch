import React, {useState} from "react";
import { ToDoInput } from "./ToDoInput";
import { ToDoList } from "./ToDoList";

const Home = () => {
	const [toDos, setToDos] = useState([])
	const createToDoList = async () => {

		
	}
	const getList = async () => {


	}

	return (
		<div className="text-center">
			<ToDoInput />
			<ToDoList />

		</div>
	);
};

export default Home;