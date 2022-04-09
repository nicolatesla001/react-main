const User = ({user, setUser, setUserIdForPost}) => {
    const click = () => {
        setUserIdForPost(false);
        setUser(user);
    }
    return (
        <div>
            {user.id}-{user.name}-{user.username}
            <input type="button" value="show info" onClick={click}/>
        </div>
    );
};

export {User};