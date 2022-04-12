import {carService} from "../../services";

const Car = ({car,setUserForUpdate,setIdByDelete}) => {
    const {id, model, price, year} = car;
    const deleteCar= async ()=>{
 await carService.deleteById(id);
        setIdByDelete(id)

    }

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <br/>
            <button onClick={()=>deleteCar()}>Delete Car</button>
            <button onClick={()=>setUserForUpdate(car)}>update</button>
        </div>
    );
};

export {Car};