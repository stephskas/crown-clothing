import React, {useState} from 'react';
import './sign-in-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'

function SignInForm(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  }

  const handleChange = (e) => {
    e.preventDefault();
    e.target.name === "email" ?
      setEmail(e.target.value)
    :
      setPassword(e.target.value)
      console.log({email, password})
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="email"
          value={email}
          name="email"
          label="email"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          label="password"
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;