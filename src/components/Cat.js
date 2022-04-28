import {useDispatch} from "react-redux";
import {catAction} from "../redux";

const Cat = ({cat}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {cat.name}
            <button onClick={()=>dispatch(catAction.setCatForUpdate({cat}))}>Update</button>
            <button onClick={()=>dispatch(catAction.deleteCat({id:cat.id}))}>Delete</button>

        </div>
    );
};

export {Cat};