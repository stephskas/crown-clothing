import React, {useState} from 'react';
import './sign-in-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

function SignInForm(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
  
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  }

 const handleChange = async event => {
   event.preventDefault()
   const { name, value } = event.target;
   return (name === "email" ? setEmail(value)
   : name === "password" ? setPassword(value)
   : '' )
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