const User = ({user, setUser, setUserIdForPost}) => {
    const click = () => {
        setUserIdForPost(false);
        setUser(user);
    }
    return (
        <div>
            {user.name}
            <input type="button" value="show user" onClick={click}/>
        </div>
    );
};

export {User};