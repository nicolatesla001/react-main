import {useState} from "react";
import {useDispatch} from "react-redux";
import {dogAction} from "../redux";

const DogsForm = () => {

    const [name,setName]=useState('');

    const dispatch = useDispatch();
    const save=()=>{
        dispatch(dogAction.addDog({name}))
        setName('')
    }
    return (
        <div>
            <label>Dog name:<input type="text" onChange={(e)=>setName(e.target.value)}/></label>
            <button onClick={save}>Save</button>
        </div>
    );
};

export {DogsForm};