
import React from 'react';

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}


export default function UserList(props) {




    function showItem(user) {
        console.log()

        return <div id="usersItem">

            {(Object.keys(user).map(key => (typeof (user[key])) == 'object' ?
                <p> <b> Adress:</b><span className="adressItems">{Object.values(user[key]).map(item => <p>{item}</p>)}</span></p> :
                typeof (user[key]) == 'boolean' ? <p><b>{ucFirst(key) + ": "}</b>{user[key] === true ? 'Yes' : 'No'}</p> :
                    <p><b>{ucFirst(key) + ": "}</b>{user[key]}</p>)

            )}</div>

    }


    function showAllUser(checked) {

        return (
            <>

                {props.userInfo.map(user => {

                    if (checked & user.active) {

                        return showItem(user);

                    }
                    else if (!checked) {

                        return showItem(user);

                    }

                })
                }
            </>)

    }






    return (<> <h1>List of users</h1>
        <div className={props.cheked ? "userCheckWrapper" : "userWrapper"}> {

            showAllUser(props.cheked)

        }</div></>)
}


