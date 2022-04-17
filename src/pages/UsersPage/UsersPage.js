import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";


import {userService} from "../../services";
import {User} from "../../components";
import css from "./Users.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div className={css.wrapper}>
            <div className={css.user}>
                {users
                    ? users.map((user) => <User key={user.id} user={user}/>)
                    : 'Loading...'}
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};