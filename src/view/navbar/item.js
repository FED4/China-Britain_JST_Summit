import React, { Component } from 'react';


class Item extends Component {

    constructor(props) {
        super(props);
        this.text = props.text
    }

    directTo() {

    }

    render() {
        return (
            <div className=''>
                {this.text}
            </div>
        )
    }
}

export default Item;
