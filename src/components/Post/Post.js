import {Button} from "../Button/Button";

const Post = ({post,flag}) => {
    const {id, title} = post;
    return (
        <div>
            {id}-{title}
            {
                flag && <Button to={id.toString()} state={post}>Get details</Button>
            }
        </div>
    );
};

export {Post};