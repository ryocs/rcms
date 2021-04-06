import React, { useState } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Dashboard.css";

export default function Dashboard(){
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>Username/d</Form.Label>
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