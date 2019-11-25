import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { handleBackgroundImageDataLoadAction } from '@util/store/modules/home';

class App extends Component {
  componentDidMount() {
    handleBackgroundImageDataLoadAction();
  }
  render() {
    return (
      <div className="container">
        <h3 className="title">Image Site</h3>
        <div className="area_input">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="submit">검색</button>
        </div>
        <div className="area_img"></div>
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
