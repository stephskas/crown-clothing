import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignInForm />
    <SignUpForm />
  </div>
)

export default SignInSignUpPage;