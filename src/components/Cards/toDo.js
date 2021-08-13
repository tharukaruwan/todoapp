import React, { useState } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import { MdDeleteForever } from 'react-icons/md';
import data from "../../data";
import axios from "axios";

import { useDispatch } from "react-redux";
import { getAllToDos } from "../../redux/actions/todoAction";

const ToDo = ({ todo }) => {

    const dispatchAction = useDispatch();

    // delete todo modal controllers
    const [deleteTodo, setDeleteTodo] = useState(false);
    const deleteTodoModalClose = () => setDeleteTodo(false);

    // edit todo modal controllers
    const [editTodo, setEditTodo] = useState(false);
    const editTodoModalClose = () => setEditTodo(false);

    const DeleteTodo = ({ show, close }) => {

        const handleDelete = (e) => {
            e.preventDefault();

            axios.delete(`${data.apiDomain}/api/todo/${todo._id}`)
                .then(res => {
                    dispatchAction(getAllToDos());
                    close();
                }).catch(err => {
                    console.log(err);
                });
        }

        return (
            <Modal show={show} onHide={close} centered size="lg" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title>Delete Todo?..</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Are you sure you wanted to delete this todo?</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="submit" block onClick={close}>
                        No
                    </Button>
                    <Button variant="danger" type="submit" block onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const EditTodo = ({ show, close }) => {

        // patch
        const [heading, setHeading] = useState("");
        const [content, setContent] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();

            // const todoBody = { "heading": heading, "content": content };

            const todoBody = [{ propName: "heading", value: heading }, { propName: "content", value: content }];

            axios.patch(`${data.apiDomain}/api/todo/${todo._id}`, todoBody)
                .then(res => {
                    console.log(res.data);
                    setHeading("");
                    setContent("");
                    dispatchAction(getAllToDos());
                    close();
                }).catch(err => {

                });
        }

        return (
            <Modal show={show} onHide={close} centered size="lg" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header>
                    <Modal.Title>EditTodo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control type="text" placeholder="Enter heading" value={heading} onChange={(e) => { setHeading(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter content" rows={3} value={content} onChange={(e) => { setContent(e.target.value) }} />
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>

            </Modal>
        );
    }

    return (
        <>
            <Card style={{ marginTop: "5px" }}>
                <Card.Header>{todo.heading} <MdDeleteForever style={{ cursor: 'pointer', color: "red" }} onClick={() => setDeleteTodo(true)} /></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p style={{ cursor: 'pointer' }} onClick={() => setEditTodo(true)} >
                            {todo.content}
                        </p>
                        <footer className="blockquote-footer">
                            created at <cite style={{ color: "red" }} title="Source Title">{todo.datetime}</cite> by <cite style={{ color: "red" }} title="Source Title">{todo.userid}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <DeleteTodo show={deleteTodo} close={deleteTodoModalClose} todo={todo} />
            <EditTodo show={editTodo} close={editTodoModalClose} todo={todo} />
        </>
    );
};

export default ToDo;