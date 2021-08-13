import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import data from "../../data";

import { useDispatch } from "react-redux";
import { getAllToDos } from "../../redux/actions/todoAction";

const AddTodo = ({ show, close }) => {

    const dispatchAction = useDispatch();
    // const todoList = useSelector(state => state.todoData.todos);

    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const todoBody = { "heading": heading, "content": content, "userid": "initialtestuser" };

        axios.post(`${data.apiDomain}/api/todo`, todoBody)
          .then(res => {
              console.log(res.data);
              setHeading("");
              setContent("");
              close();
              dispatchAction(getAllToDos());
          }).catch(err => {

          });

    }

    //   useEffect(() => {
    //     if (errorCount > 4) {
    //       dispatchauthAction(logout());
    //     }
    //   });

    return (
        <>
            <Modal show={show} onHide={close} centered size="lg" aria-labelledby="contained-modal-title-vcenter">

                <Modal.Header>
                    <Modal.Title>Hi! Let's create To Do</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control type="text" placeholder="Enter heading" value={heading} onChange={(e) => { setHeading(e.target.value) }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter content" rows={3} value={content} onChange={(e) => { setContent(e.target.value) }}/>
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default AddTodo;