const PostDetails = ({post}) => {
    const{id,userId,title,body}=post;
    return (
        <div>
            <div>ID: {id}</div>
            <div>User Id: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {PostDetails};