import React from "react";
import { Form, Button } from "semantic-ui-react";
import "../containers/LogIn.css";
import API from "../helpers/API";

class SignInForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = () => {
    API.signIn(this.state.username, this.state.password)
      .then((data) => {
        // check if we got an error back
        if (data.error) throw Error(data.error);
        // here we know for sure that there was no error
        this.props.signIn(data);
        this.props.history.push("/create-team");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div className="login-container">
        <h1>Log In</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input name="username" onChange={handleChange} required />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
          </Form.Field>
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    );
  }
}

export default SignInForm;
