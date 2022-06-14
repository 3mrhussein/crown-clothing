import shopTypes from "./shop.types";
//import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: shopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: shopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


// code related to thunk middle ware replaced by redux-saga
// export const fetchCollectionStartAsync = () => {
//     return dispatch => {
//         console.log("Hello");
//         const collectionRef = firestore.collection('Collections');
//         dispatch(fetchCollectionsStart());
//         collectionRef.get().then(snapShot => {
//             const collectionsMap = convertCollectionSnapshotToMap(snapShot);
//             if(Object.keys(collectionsMap).length!==0){
//              dispatch(fetchCollectionsSuccess(collectionsMap));
//             }
//             else{
//             const er = Error;
//             er.message="Collections Is Empty";
//             throw(er);
//             }
//         }).catch(error => dispatch(fetchCollectionsFailure(error.message)));

//     }
// }