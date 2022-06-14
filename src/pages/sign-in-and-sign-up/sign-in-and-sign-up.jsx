import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
//import './sign-in-and-sign-up.styles.scss';
import {
  SigninAndSignUpPageContainer,
  SignInFormContainer,
  SigninPageLogoContainer,
} from './sign-in-and-sign-up.styles';
const SignInAndSignUpPage = () => (
  // <div className="sign-in-and-sign-up">
  <SigninAndSignUpPageContainer>
    <SigninPageLogoContainer>
      <Logo />
    </SigninPageLogoContainer>
    <SignInFormContainer>
      <SignIn />
    </SignInFormContainer>
  </SigninAndSignUpPageContainer>
  /* <SignUp /> */
  // </div>
);
export default SignInAndSignUpPage;
