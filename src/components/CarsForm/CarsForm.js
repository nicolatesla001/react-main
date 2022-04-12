import {useForm} from "react-hook-form";
import {carService} from "../../services";
// import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {useEffect} from "react";

const CarsForm = ({setNewCar,userForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors},setValue} = useForm({resolver:joiResolver(carValidator),
        mode:"onTouched"})
    // const [formError,setFortError]=useState({})
    useEffect(()=>{
        if (userForUpdate){
            const {model,price,year}=userForUpdate
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)
        }
    },[userForUpdate])

    const mySubmit = async (car) => {
        try{
            const {data} = await carService.create(car);
            setNewCar(data)
            reset()
        } catch (e){

            // setFortError(e.response.data)
        }

    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Pice: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>Save</button>

        </form>
    );
};

export {CarsForm};