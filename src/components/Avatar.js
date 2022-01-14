
import React, { Component } from 'react'

export default class Avatar extends Component {
    render() {
        return (
            <a>
                {this.props.firstName} {this.props.lastName}
            </a>
        )
    }
}

