import React from 'react';

export default class ClickMe extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return false;
        };
    }
    clickMe() {
        console.log('Hello World');
    }
    render() {
        return <div>
            <button type='button' onClick={(e) => this.clickMe()}>Click Me</button>
        </div>
    }
};
