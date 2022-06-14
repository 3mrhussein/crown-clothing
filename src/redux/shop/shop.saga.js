import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';
import { takeEvery, call, put } from 'redux-saga/effects';
import shopTypes from './shop.types.js';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';
export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('Collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

// collectionRef
// .get()
// .then(snapShot => {
//     const collectionsMap = convertCollectionSnapshotToMap(snapShot);

// if (Object.keys(collectionsMap).length !== 0) {

// }

// {
//     const er = Error;
//     er.message = "Collections Is Empty";
//     throw (er);
// }
//     }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
