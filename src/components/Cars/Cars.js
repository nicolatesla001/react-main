import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../Car/Car";


const Cars = ({newCar, setUserForUpdate}) => {
    const [cars, setCars] = useState([])
    const [carIdByDel, setIdByDelete] = useState([])
    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (carIdByDel) {
            setCars(cars.filter(car => car.id !== carIdByDel))
        }
    }, [carIdByDel])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setIdByDelete={setIdByDelete}
                                  setUserForUpdate={setUserForUpdate}/>)}
        </div>
    );
};

export {Cars};
