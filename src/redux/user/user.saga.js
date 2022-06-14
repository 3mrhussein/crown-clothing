import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import userTypes from './user.types';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';
import {
  signInSucess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
} from './user.actions';
// import { cps } from "redux-saga/effects";
import { getCurrentUser } from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
    console.log(error.message);
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    alert(error.message);
  }
}

export function* onSignInWithEmailStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    alert(error.message);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}
export function* onSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_START, userSignOut);
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield call(getSnapshotFromUserAuth, user, additionalData);
}
export function* onSignUpSuccess() {
  yield takeLatest(userTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSignUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (e) {
    yield put(signUpFailure(e));
  }
}

export function* onSignUpStart() {
  try {
    yield takeLatest(userTypes.SIGN_UP_START, userSignUp);
  } catch (e) {
    yield console.log('Error ', e.message);
  }
}
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignInWithEmailStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
