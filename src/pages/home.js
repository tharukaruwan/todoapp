import React from "react";
import ToDo from "../components/Cards/toDo";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

//Container
const Home = () => {

    const todoList = useSelector(state => state.todoData.todos);

    function GetTodoList(todos) {
        return todos && todos.map((todo, index) => {
            return (
                <ToDo key={index} todo={todo}/>
            )
        })
    }

    return (
        <Container style={{ marginTop: "20px" }}>
            {GetTodoList(todoList)}
        </Container>
    );
};

export default Home;
