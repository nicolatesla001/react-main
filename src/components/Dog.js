import {useDispatch} from "react-redux";
import {dogAction} from "../redux";

const Dog = ({dog}) => {

    const dispatch = useDispatch();
    return (
        <div>
            {dog.name}
            <button onClick={()=>dispatch(dogAction.deleteDog({id:dog.id}))}>Delete</button>
        </div>
    );
};

export {Dog};