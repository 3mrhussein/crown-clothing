import { UserActionTypes } from '../../user.types';
import userTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});

export const signInSucess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredintal) => {
  return {
    type: userTypes.SIGN_UP_START,
    payload: userCredintal,
  };
};

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: userTypes.signUpFailure,
  payload: error,
});
