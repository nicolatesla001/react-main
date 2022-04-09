const UserInfo = ({user,setUserIdForPost}) => {

    return (
        <div>
            <div>Id: {user.id}</div>
            <div>Name: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Website: {user.website}</div>
            <input type="button" value="show posts" onClick={()=>setUserIdForPost(user.id)}/>
        </div>
    );
};

export default UserInfo;