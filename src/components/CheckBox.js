import React, { Component } from 'react'
import UserList from './UserList'

export default class CheckBox extends Component {


    constructor(props) {
        super(props);
        this.checkIsLoggIn = this.checkIsLoggIn.bind(this)
        this.state = {
            active: false
        }

    }

    checkIsLoggIn(event) {
        /* if(event.target.checked) */
        if (event.target.checked) {
            this.setState({ active: true })
        } else { this.setState({ active: false }); }

    }


    render() {
        return (
            <div>

                <UserList userInfo={this.props.userInfo} cheked={this.state.active} />
                <br />
                <label htmlFor="check3" className="checkbox">Show active users</label>
                <input type="checkbox" id="check3" onChange={this.checkIsLoggIn} />
            </div>
        )
    }
}