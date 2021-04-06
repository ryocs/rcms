import React, { useState } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login(){
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/users/login', {userName: userName, password: password}).then((response) => {
        if (response.data.message !== undefined) {
            console.log(response.data.message);
        } else {
            localStorage.setItem("loggedIn", true);
        }
        axios.get('/api/users').then(next => {
            console.log(next);
        });
    });
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>Username/Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}