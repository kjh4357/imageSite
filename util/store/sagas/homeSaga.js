import { put, takeLatest, call } from 'redux-saga/effects';

import {
  SEARCH_IMAGE_REQUEST,
  handleSearchImageDataSuccessAction,
  handleSearchImageDataFailureAction,
  BACKGROUND_IMAGE_REQUEST,
  handleBackgroundImageDataSuccessAction,
  handleBackgroundImageDataFailureAction,
} from '../modules/home';
import {
  getSearchImage,
  fetchRandomImage,
} from '../../api/image';

function* handleSearchImageDataLoad({payload}) {
  console.log(payload)
  try {
    const { data } = yield call(getSearchImage, payload);
    yield put(handleSearchImageDataSuccessAction(data));
  } catch (err) {
    yield put(handleSearchImageDataFailureAction(err));
  }
}

function* handleBackgroundImageDataLoad() {
  try {
    const { data } = yield call(fetchRandomImage);
    yield put(handleBackgroundImageDataSuccessAction(data));
  } catch (err) {
    yield put(handleBackgroundImageDataFailureAction(err));
  }
}

export default function* homeSaga() {
  yield takeLatest(SEARCH_IMAGE_REQUEST, handleSearchImageDataLoad);
  yield takeLatest(BACKGROUND_IMAGE_REQUEST, handleBackgroundImageDataLoad);
}
