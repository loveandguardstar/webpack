// 'use strict';

// import React from 'react';
// import gitPng from './image/gitPng.png'
// import './search.less';

const React = require('react')
const gitPng = require('./image/git.png')
require('./search.less')


class Search extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }

    loadComponent() {
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
            <img src={gitPng} onClick={this.loadComponent.bind(this)} />
        </div>;
    }
}

module.exports = <Search/>