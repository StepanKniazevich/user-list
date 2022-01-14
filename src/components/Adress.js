
import React, { Component } from 'react'

export default class Adress extends Component {
    render() {
        return (
            <>

                {Object.values(this.props.region).map(element => <p>{element}</p>)}
            </>
        )
    }
}
