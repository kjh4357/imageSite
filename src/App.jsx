import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import './style.scss';
import { handleBackgroundImageDataLoadAction } from '@util/store/modules/home';

class App extends Component {
  static propTypes = {
    homeStore: ImmutablePropTypes.contains({
      backgroundImageData: PropTypes.object,
      isBackgroundImageFetchedSuccess: PropTypes.bool,
    }).isRequired,
    handleBackgroundImageDataLoad: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    };
  }
  static getDerivedStateFromProps(nextProps) {
    const {
      backgroundImageData,
      isBackgroundImageFetchedSuccess,
    } = nextProps.homeStore.toJS();
    if (isBackgroundImageFetchedSuccess) {
      return { imageUrl: backgroundImageData.urls.small };
    }

    return null;
  }
  componentDidMount() {
    this.props.handleBackgroundImageDataLoad();
  }
  render() {
    const { imageUrl } = this.state;
    console.log(imageUrl);
    return (
      <div className="container">
        <h3 className="title">Image Site</h3>
        <div className="area_input">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="submit">검색</button>
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
  handleBackgroundImageDataLoad: () =>
    dispatch(handleBackgroundImageDataLoadAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
