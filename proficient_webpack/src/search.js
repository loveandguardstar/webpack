// 'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.scss';
import gitPng from './image/gitPng.png'

class Search extends React.Component {
    render() {
      return <div className="search-text">Hellsddfo 234324!
        <img src = { gitPng }/>
      </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);