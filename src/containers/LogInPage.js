import React from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";
import './LogIn.css'

const LogInPage = () => {
  return (
    <>
      <div className='login-container'>
        <h1>Log In</h1>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    </>
  );
};

export default LogInPage;
