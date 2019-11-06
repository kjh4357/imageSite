import React, { Component } from 'react';
import './style.scss'

class App extends Component {
  
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
    )
  }
}
export default App;