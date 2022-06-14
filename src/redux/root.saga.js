import { call, all } from "@redux-saga/core/effects";

import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSaga } from "./user/user.saga";
import { cartSagas } from "./cart/cart.saga";


export default function* rootSaga() {
    yield all([call(fetchCollectionsStart), call(userSaga), call(cartSagas)]);
}