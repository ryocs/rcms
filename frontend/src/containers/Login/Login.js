import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login(){
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/users/login', {userName: userName, password: password}).then((response) => {
        if (response.data !== undefined) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.user);
            history.pushState("/cms/dashboard");
            //axios.get('/api/users',{headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}).then(next => {
              //console.log(next);
            //});
        }
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