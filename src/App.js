import React, {useState} from 'react';

import styles from './App.module.css'
import {Users} from "./components";
import UserInfo from "./components/UserInfo/UserInfo";
import {Posts} from "./components/Posts/Posts";

const App = () => {

    const [user, setUser] = useState(null)
    const [userIdForPost, setUserIdForPost] = useState(null)
    return (
        <div>
            <div className={styles.usersInfo}>
                <Users setUser={setUser} setUserIdForPost={setUserIdForPost}/>
                {user && <UserInfo user={user} setUserIdForPost={setUserIdForPost}/>}
            </div>
            {userIdForPost && <Posts userId={userIdForPost}/>}
        </div>
    );
};

export default App;