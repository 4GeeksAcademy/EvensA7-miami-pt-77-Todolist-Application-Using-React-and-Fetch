import React from "react";

export const ToDoList = (props) => {
    const deleteToDo = async () => {
        
    }
    const deleteAll = async () => {
        
    }
    
    return (
        <ul>
				{props.todos?.map((task, index) => {
					return <li key={index}>{task.label}<span onClick={()=>deleteToDo(task.id)}> X</span></li>
				}
				)}
			</ul>
    );
};
