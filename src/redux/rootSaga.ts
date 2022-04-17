import { all } from "redux-saga/effects";
import { componentListSaga,componentPostSaga,componentPatchSaga,componentDeleteSaga } from "../ducks/listComponents/sagas";


export default function* rootSaga() {
    yield all([componentListSaga(),componentPostSaga(),componentPatchSaga(),componentDeleteSaga()]);
}