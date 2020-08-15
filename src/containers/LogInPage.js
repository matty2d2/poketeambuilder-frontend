import React, {useEffect} from "react";
import './LogIn.css'
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const LogInPage = (props) => {

  useEffect(
    () => {
      if (localStorage.getItem('token')) props.history.push('/create-team')
    },
    [props.history]
  )

  return (
    <div className='main-container'>
      <SignInForm {...props}/>
      <SignUpForm {...props}/>
    </div>
  );
};

export default LogInPage;
