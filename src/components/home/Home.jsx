// import styles from './Home.module.css';
import { useState } from 'react';
import CarItem from '../home/car-item/CarItem.jsx'
import { cars as carsData} from './cars.js'
import CreateCarForm from './create-car-form/CreateCarForm.jsx';

function Home() {
    const [cars, setCars] = useState(carsData)
    return (
        <div >
            <CreateCarForm setCars={setCars} />
            <div >
                <h1>Cars catalog</h1>
            </div>
            {cars.length ? (cars.map((car) => (
                <CarItem key={car.id} car={car} />
            ))) : (<p> "there are no cars" </p>)}
        </div>
    )
}

export default Home;
