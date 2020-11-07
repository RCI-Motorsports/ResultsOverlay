import React, { Component } from 'react';

export class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div key={this.props.staticTitle} className='Title'>{`${this.props.title} - ${this.props.staticTitle}`}</div>
            </div>
        );
    }
}

export default Title;