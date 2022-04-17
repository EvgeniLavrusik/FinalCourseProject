import { takeLatest, put, call } from "redux-saga/effects";
import {
    GET_LIST_COMPONENTS,
    ACTION_GET_LIST_FAILED,
    ACTION_GET_LIST_SUCCEED,
    ACTION_POST_COMPONENT_SUCCEED,
    ACTION_POST_COMPONENT_FAILED,
    POST_COMPONENT,
    ACTION_PATCH_COMPONENT_SUCCEED,
    ACTION_PATCH_COMPONENT_FAILED,
    PATCH_COMPONENT,
    ACTION_DELETE_COMPONENT_SUCCEED,
    ACTION_DELETE_COMPONENT_FAILED,
    DELETE_COMPONENT
} from "./actions";
import { ACTION_CLEANING_RULES } from "../rule/actions";
import { createCustomComponent, editCustomComponent, deleteCustomComponent } from '../../services/listComponentsApi';
import { fetchComponentList } from "../../services/helpers/fetchComponentsList";

export function* getComponentListSaga(action) {
    try {
        const data = yield call(fetchComponentList, action.payload);
        yield put(ACTION_GET_LIST_SUCCEED(data));
        yield put(ACTION_CLEANING_RULES());
    } catch (e) {
        yield put(ACTION_GET_LIST_FAILED(e.message));
    };
};

export function* postComponent(action) {
    try {
        const data = yield call(createCustomComponent, action.component, action.data);
        yield put(ACTION_POST_COMPONENT_SUCCEED(data.data));
        yield put(ACTION_CLEANING_RULES());
    } catch (e) {
        yield put(ACTION_POST_COMPONENT_FAILED(e.message));
    };
};

export function* patchComponent(action) {
    try {
        const data = yield call(editCustomComponent, action.component, action.data)
        console.log(data);
        yield put(ACTION_PATCH_COMPONENT_SUCCEED(data.data));
        yield put(ACTION_CLEANING_RULES());
    } catch (e) {
        yield put(ACTION_PATCH_COMPONENT_FAILED(e.message));
    };
};
export function* deleteComponent(action) {
    try {
        yield call(deleteCustomComponent, action.component, action.idComponent);
        yield put(ACTION_DELETE_COMPONENT_SUCCEED(action.idComponent));
        yield put(ACTION_CLEANING_RULES());
    } catch (e) {
        yield put(ACTION_DELETE_COMPONENT_FAILED(e.message));
    };
};
export function* componentDeleteSaga() {
    yield takeLatest(DELETE_COMPONENT, deleteComponent);
};

export function* componentPatchSaga() {
    yield takeLatest(PATCH_COMPONENT, patchComponent);
};
export function* componentPostSaga() {
    yield takeLatest(POST_COMPONENT, postComponent);
};

export function* componentListSaga() {
    yield takeLatest(GET_LIST_COMPONENTS, getComponentListSaga);
};





