import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/**
 * Action Types
 */
export const CHANGE_FIELD_VALUE = 'main/CHANGE_FIELD_VALUE';
export const SEARCH_IMAGE_INIT = 'main/SEARCH_IMAGE_INIT';
export const SEARCH_IMAGE_REQUEST = 'main/SEARCH_IMAGE_REQUEST';
export const SEARCH_IMAGE_SUCCESS = 'main/SEARCH_IMAGE_SUCCESS';
export const SEARCH_IMAGE_FAILURE = 'main/SEARCH_IMAGE_FAILURE';
export const BACKGROUND_IMAGE_INIT = 'main/BACKGROUND_IMAGE_INIT';
export const BACKGROUND_IMAGE_REQUEST = 'main/BACKGROUND_IMAGE_REQUEST';
export const BACKGROUND_IMAGE_SUCCESS = 'main/BACKGROUND_IMAGE_SUCCESS';
export const BACKGROUND_IMAGE_FAILURE = 'main/BACKGROUND_IMAGE_FAILURE';

/**
 * Actions
 */
export const handleFieldValueChangeAction = createAction(
  CHANGE_FIELD_VALUE,
  data => data,
);
export const handleSearchImageDataInitAction = createAction(SEARCH_IMAGE_INIT);
export const handleSearchImageDataLoadAction = createAction(SEARCH_IMAGE_REQUEST);
export const handleSearchImageDataSuccessAction = createAction(
  SEARCH_IMAGE_SUCCESS,
  data => data,
);
export const handleSearchImageDataFailureAction = createAction(
  SEARCH_IMAGE_FAILURE,
  err => err,
);
export const handleBackgroundImageDataInitAction = createAction(BACKGROUND_IMAGE_INIT);
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
  searchText: '',
  fetchingSearchImage: false,
  fetchingBackgroundImage: false,
  isSearchImageFetchedSuccess: false,
  isBackgroundImageFetchedSuccess: false,
  searchImageData: {},
  searchImageError: {},
  backgroundImageData: {},
  backgroundImageError: {},
});

export default handleActions(
  {
    [CHANGE_FIELD_VALUE]: (state, { payload: { target, data } }) =>
      state.set(target, data),
    [SEARCH_IMAGE_INIT]: state =>
      state.set('isSearchImageFetchedSuccess', false),
    [SEARCH_IMAGE_REQUEST]: state =>
      state.set('fetchingSearchImage', true),
    [SEARCH_IMAGE_SUCCESS]: (state, { payload }) =>
      state
        .set('fetchingSearchImage', false)
        .set('isSearchImageFetchedSuccess', true)
        .setIn(['searchImageData'], payload.results[0] || {}),
    [SEARCH_IMAGE_FAILURE]: (state, { payload }) =>
      state
        .set('fetchingSearchImage', false)
        .setIn(['searchImageData'], {})
        .setIn(['searchImageError'], payload),
    [BACKGROUND_IMAGE_INIT]: state =>
      state.set('isBackgroundImageFetchedSuccess', false),
    [BACKGROUND_IMAGE_REQUEST]: state =>
      state.set('fetchingBackgroundImage', true),
    [BACKGROUND_IMAGE_SUCCESS]: (state, { payload }) =>
      state
        .set('fetchingBackgroundImage', false)
        .set('isBackgroundImageFetchedSuccess', true)
        .setIn(['backgroundImageData'], payload || {}),
    [BACKGROUND_IMAGE_FAILURE]: (state, { payload }) =>
      state
        .set('fetchingBackgroundImage', false)
        .setIn(['backgroundImageData'], {})
        .setIn(['backgroundImageError'], payload),
  },
  initialState,
);
