import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/**
 * Action Types
 */
export const BACKGROUND_IMAGE_REQUEST = 'main/BACKGROUND_IMAGE_REQUEST';
export const BACKGROUND_IMAGE_SUCCESS = 'main/BACKGROUND_IMAGE_SUCCESS';
export const BACKGROUND_IMAGE_FAILURE = 'main/BACKGROUND_IMAGE_FAILURE';

/**
 * Actions
 */
export const handleBackgroundImageDataLoadAction = createAction(BACKGROUND_IMAGE_REQUEST);
export const handleBackgroundImageDataSuccessAction = createAction(
  BACKGROUND_IMAGE_SUCCESS,
  data => data,
);
export const handleBackgroundImageDataFailureAction = createAction(
  BACKGROUND_IMAGE_FAILURE,
  err => err,
);

/**
 * reducer with initial state
 */
const initialState = Map({
  fetchingBackgroundImage: false,
  isBackgroundImageFetchedSuccess: false,
  backgroundImageData: {},
  backgroundImageError: {},
});

export default handleActions(
  {
    [BACKGROUND_IMAGE_REQUEST]: state =>
      state.set('fetchingBackgroundImage', true).set('error', null),
    [BACKGROUND_IMAGE_SUCCESS]: (state, { payload }) =>
      state
        .set('fetchingBackgroundImage', false)
        .set('isBackgroundImageFetchedSuccess', true)
        .setIn(['backgroundImageData'], payload || {}),
    [BACKGROUND_IMAGE_FAILURE]: (state, { payload }) =>
      state
        .setIn(['fetchingTopBanner'], false)
        .setIn(['backgroundImageData'], {})
        .setIn(['backgroundImageError'], payload),
  },
  initialState,
);
