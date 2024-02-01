import { useState } from "react";
import styles from "./create-car-form.module.css";

const CreateCarForm = ({setCars}) => {

    const [data, setData] = useState({
        name: "", price: "", image: "",
    });

    const createCar = (e) => {
        e.preventDefault();
        setCars(prev => [...prev, {id: prev.length + 1, ...data}]);
    }

    return (
        <form className={styles}>
            <input placeholder="name" 
            value={data.name} 
            onChange={e => setData(prev => ({...prev, name: e.target.value}))} />
            <input placeholder="price" 
            value={data.price} 
            onChange={e => setData(prev => ({...prev, price: e.target.value}))} />
            <input placeholder="image" 
            value={data.image} 
            onChange={e => setData(prev => ({...prev, image: e.target.value}))}/> <br />
            <button onClick={e => createCar(e)} >create</button>
        </form>
    );
}
export default CreateCarForm;