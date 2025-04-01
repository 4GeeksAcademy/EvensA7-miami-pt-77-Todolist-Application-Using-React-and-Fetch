import React from "react";

export const ToDoList = (props) => {
    const deleteToDo = async (id) => {
        let response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        })
        props.getUser()
    }
    const deleteAll = async () => {
        let response = await fetch(`https://playground.4geeks.com/todo/users/evensa7`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        })
        props.getUser() 
    }

    return (
        <ul>
            {props.todos?.map((task, index) => {
                return <li key={index}>{task.label}<span onClick={() => deleteToDo(task.id)}> X</span></li>
            }
            )}
        </ul>
    );
};
