import React, { useState } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
const EditEmail = props => {
  console.log(props);
  const [email, setEmail] = useState({
    email: "",
    password: "",
    newEmail: "",
    confirmNewEmail: ""
  });

  const changeHandler = ev => {
    ev.persist();

    let value = ev.target.value;

    setEmail({
      ...email,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email inside handlesubmit", email);
    const id = props.match.params.id;
    // axiosWithAuth()
    axios
      .put(`https://welldone-db.herokuapp/api/accounts/${id}`, email)
      .then(res => {
        console.log("res.data inside axios", res.data);
        props.history.push("/settings");
        props.updateEmail(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="form-container">
      <div className="form-wrap">
        <h1 className="update-header"> Change Email</h1>
      </div>
      <div>
        <div className="edit-form">
          <Form onSubmit={handleSubmit}>
            {/* Email input  */}
            <FormGroup>
              <Form.Label for="email">Email</Form.Label>
              <Form.Input
                type="email"
                name="email"
                className="input"
                onChange={changeHandler}
                value={email.email}
              />
            </FormGroup>
            {/* Password input  */}
            <FormGroup>
              <Form.Label for="password">Password</Form.Label>
              <Form.Input
                type="password"
                name="password"
                className="input"
                onChange={changeHandler}
                value={email.password}
              />
            </FormGroup>
            {/* New Email input  */}
            <FormGroup>
              <Form.Label for="newEmail">New Email</Form.Label>
              <Form.Input
                type="email"
                name="newEmail"
                className="input"
                onChange={changeHandler}
                value={email.newEmail}
              />
            </FormGroup>
            {/* Confirm New Email input  */}
            <FormGroup>
              <Form.Label for="confirmNewEmail">Confirm New Email</Form.Label>
              <Form.Input
                type="email"
                name="confirmNewEmail"
                className="input"
                onChange={changeHandler}
                value={email.confirmNewEmail}
              />
            </FormGroup>
            <Button color="primary" type="submit" className="btnEdit">
              Change Email
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditEmail;
