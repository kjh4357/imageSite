import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import './style.scss';
import {
  handleSearchImageDataInitAction,
  handleBackgroundImageDataInitAction,
  handleFieldValueChangeAction,
  handleSearchImageDataLoadAction,
  handleBackgroundImageDataLoadAction,
} from '@util/store/modules/home';

class App extends Component {
  static propTypes = {
    homeStore: ImmutablePropTypes.contains({
      searchText: PropTypes.string,
      searchImageData: PropTypes.object,
      backgroundImageData: PropTypes.object,
      isSearchImageFetchedSuccess: PropTypes.bool,
      isBackgroundImageFetchedSuccess: PropTypes.bool,
    }).isRequired,
    handleSearchImageInit: PropTypes.func.isRequired,
    handleBackgroundImageInit: PropTypes.func.isRequired,
    handleSearchImage: PropTypes.func.isRequired,
    handleFieldValueChange: PropTypes.func.isRequired,
    handleBackgroundImageDataLoad: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchImage = this.onSearchImage.bind(this);
  }
  static getDerivedStateFromProps(nextProps) {
    const {
      searchImageData,
      backgroundImageData,
      isSearchImageFetchedSuccess,
      isBackgroundImageFetchedSuccess,
    } = nextProps.homeStore.toJS();
    if (isBackgroundImageFetchedSuccess) {
      nextProps.handleBackgroundImageInit();
      return { imageUrl: backgroundImageData.urls.small };
    } else if (isSearchImageFetchedSuccess) {
      nextProps.handleSearchImageInit();
      return { imageUrl: searchImageData.urls.small };
    }

    return null;
  }
  componentDidMount() {
    this.props.handleBackgroundImageDataLoad();
  }

  onInputChange(e) {
    const target = 'searchText';
    const data = e.target.value;
    this.props.handleFieldValueChange({ target, data });
  }
  onSearchImage() {
    const { searchText } = this.props.homeStore.toJS();
    this.props.handleSearchImage(searchText);
  }
  handleInitSuccess() {}
  render() {
    const { imageUrl } = this.state;
    console.log(imageUrl);
    return (
      <div className="container">
        <h3 className="title">Image Site</h3>
        <div className="area_input">
          <input
            type="text"
            onChange={this.onInputChange}
            placeholder="검색어를 입력하세요(영문)"
          />
          <button type="button" onClick={this.onSearchImage}>
            검색
          </button>
        </div>
        <div className="area_img">
          <img src={imageUrl} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  homeStore: store.home,
});

const mapDispatchToProps = dispatch => ({
  handleSearchImageInit: () => dispatch(handleSearchImageDataInitAction()),
  handleBackgroundImageInit: () =>
    dispatch(handleBackgroundImageDataInitAction()),
  handleSearchImage: payload =>
    dispatch(handleSearchImageDataLoadAction(payload)),
  handleBackgroundImageDataLoad: () =>
    dispatch(handleBackgroundImageDataLoadAction()),
  handleFieldValueChange: payload =>
    dispatch(handleFieldValueChangeAction(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
