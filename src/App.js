import {CarsForm, Cars} from "./components";
import {useState} from "react";


const App = () => {
   const [newCar,setNewCar]=useState(null)
    const [userForUpdate,setUserForUpdate]=useState(null)

    return (
        <div>
          <CarsForm setNewCar={setNewCar} userForUpdate={userForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setUserForUpdate={setUserForUpdate} />
            <hr/>
        </div>
    );
};

export default App;