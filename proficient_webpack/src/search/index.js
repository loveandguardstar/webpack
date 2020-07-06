// 'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import gitPng from './image/gitPng.png'
import { helloworld } from '../common.js'
import { a } from './tree-shaking.js'

document.write(helloworld())

if (false) {
  a()
}

class Search extends React.Component {

    constructor () {
      super(...arguments);
      this.state = {
        Text: null
      }
    }

    loadComponent () {
      import('./text.js').then((Text) => {
        this.setState({
          Text: Text.default
        })
      })
    }

    render() {
      // debugger
      const { Text } = this.state
      return <div className="search-text">Hellsddfo 234324!
        {
          Text ? <Text></Text> : null
        }
        <img src = { gitPng } onClick={this.loadComponent.bind(this)}/>
      </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);