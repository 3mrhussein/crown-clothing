import React, { useState } from 'react';
//import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { SignInButtonsContainer, SignInFormContainer } from './sign-in.styles';
import Modal from '../modal/modal-component';
import SignUpComponent from '../sign-up/sign-up.component';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    try {
      //  await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignInFormContainer>
      {showSignupModal ? (
        <Modal setShowModal={setShowSignupModal}>
          <SignUpComponent />
        </Modal>
      ) : null}
      <h1>Already have an account</h1>
      <span>Sign in With your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          value={password}
          type="password"
          required
          label="Password"
          handleChange={handleChange}
        />

        <p>
          Dont have and account ?{' '}
          <span onClick={() => setShowSignupModal(true)}> SignUp</span>{' '}
        </p>
        <SignInButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </SignInButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
