import React from "react";

export const ToDoList = (props) => {
    const deleteToDo = async () => {

    }
    const deleteAll = async () => {

    }
    console.log(props.todos)
    
    return (
        <ul>
				{props.todos?.map((task, index) => {
					return <li key={index}>{task.label}<span onClick={()=>removeTask(index)}> X</span></li>
				}
				)}
			</ul>
    );
};
