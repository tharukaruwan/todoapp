import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, lazy, useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTodo from "./components/Models/addTodo";

// page components
const Home = lazy(() => import("./pages/home"));
const Notfound = lazy(() => import("./pages/notfound"));

function App() {

  const [addTodoForm, setAddTodoForm] = useState(false);
  const addTodoFormModalClose = () => setAddTodoForm(false);



  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">TODO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#create-todo"><Button size="sm" variant="danger" onClick={() => setAddTodoForm(true)} >Create Todo!</Button></Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Loged in as Tharuka" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                <NavDropdown.Item href="#my-account">Account</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
        <Suspense
          fallback={
            <div>Loding...</div>
          }
        >
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route exact component={Notfound} />
          </Switch>
        </Suspense>
      </Router>
      <AddTodo show={addTodoForm} close={addTodoFormModalClose} />
    </>
  );
}

export default App;
