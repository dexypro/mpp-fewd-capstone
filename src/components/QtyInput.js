import React, { Component } from 'react'

export default class QtyInput extends Component {
    constructor(props) {
        super(props);
    }
        render() {
        return (
            <>
            {/* 
                rubric42 
                The user should see an input field labeled “Qty”
            */}
            <span className="mr-2">Qty</span>
            <input id="productQty" type="number" defaultValue="1" min="1" max="100" />
            </>
        );
    }
}
