import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up-form.styles.scss';
import  { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

function SignUpForm () {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword){
      alert("passwords don't match");
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword (email, password);
      await createUserProfileDocument(user, {displayName});
      console.log(user)
    } catch (e) {
      console.log(e)
    }
  }
 

  const handleChange = (event) => {
    const {name, value} = event.target;
      return name === 'displayName' ? setDisplayName(value) 
      : name === 'email' ? setEmail(value)
      : name === 'password' ? setPassword(value)
      : name === 'confirmPassword' ? setConfirmPassword(value)
      : '';
  } 

  

  return (
    <div className="sign-up">
      <h2>I do not have an account.</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUpForm;