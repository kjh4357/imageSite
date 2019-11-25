import { put, takeLatest, call } from 'redux-saga/effects';

import {
  BACKGROUND_IMAGE_REQUEST,
  handleBackgroundImageDataSuccessAction,
  handleBackgroundImageDataFailureAction,
} from '../modules/home';
import {
  fetchRandomImage,
} from '../../api/image';

function* handleBackgroundImageDataLoad() {
  try {
    const { data } = yield call(fetchRandomImage);

    yield put(handleBackgroundImageDataSuccessAction(data));
  } catch (err) {
    yield put(handleBackgroundImageDataFailureAction(err));
  }
}

export default function* homeSaga() {
  yield takeLatest(BACKGROUND_IMAGE_REQUEST, handleBackgroundImageDataLoad);
}
