import React, { useState } from 'react';
//import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import { SignupContainer } from './sign-up.styles';
import { useHistory } from 'react-router-dom';
import { emailSignInStart } from '../../redux/user/user.actions';
const SignUp = ({ signUpStart }) => {
  const history = useHistory();
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { password, confirmPassword, displayName, email } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('password does not match');
      return;
    }

    await signUpStart(userCredentials);

    try {
      //   const { user } = await auth.createUserWithEmailAndPassword(
      //     email,
      //     password
      //   );
      //   await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      history.replace({ pathname: '/' });
    } catch (e) {
      alert(e.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <SignupContainer>
      <h1 className="title">Sign Up</h1>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CustomButton type="submit">Sign up</CustomButton>
        </div>
      </form>
    </SignupContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (user) => dispatch(signUpStart(user)),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignUp);
