import React, { Component } from 'react';
import Avatar from './Avatar';
import Adress from './Adress';


export default class UserInfo extends Component {


    render() {


        return (
            <div>

                <Avatar firstName={this.props.userinfo.firstName} lastName={this.props.userinfo.lastName} />
                <Adress region={this.props.userinfo.address} />

            </div >

        )
    }
}


//<Adress adress={this.props.userInfo.address} />