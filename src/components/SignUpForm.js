import React from 'react'
import { Form, Button } from "semantic-ui-react";
import '../containers/LogIn.css'
import API from "../helpers/API";

class SignUpForm extends React.Component {

    state = {
        username: '',
        password: '',
        conf: ''
    }

    handleSubmit = (e) => {
        const {username, password, conf} = this.state
        e.preventDefault()
        if (password !== conf) {
            this.setState({
                password: '',
                conf: ''
            })
            return
        }
     
        API.createUser(username, password)
          .then(data => {
            // check if we got an error back
            if (data.error) throw Error(data.error)
      
            // here we know for sure that there was no error
            this.props.signIn(data)
            this.props.history.push('/create-team')
          })
          .catch(error => console.log(error))
    }
      
    handleChange = event => this.setState({ [event.target.name]: event.target.value })

    render(){
        const {username, password, conf} = this.state
        const { handleChange, handleSubmit } = this
        return (
            <div className='login-container'>
            <h1>Create Account</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                <label>Username</label>
                <input name='username' onChange={handleChange} value={username} required/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input name='password' type='password' onChange={handleChange} value={password} required/>
                </Form.Field>
                <Form.Field>
                <label>Confirm password</label>
                <input name='conf' type='password' onChange={handleChange} value={conf} required/>
                </Form.Field>
                <Button type="submit">Log In</Button>
            </Form>
            </div>
        )
    }
}

export default SignUpForm
