import styles from '../Profile.module.css';
import { Link } from 'react-router-dom';

function Item({
    _id,
    carModel,
    numSeats,
    fuelType,
    luggage,
    transmition
}) {
    return (
        <section className={styles.profile_list_car}>

            <Link to={`/catalog/details/${_id}`}><h3 className={styles.profile_list_car_title}>{carModel}</h3></Link>
            <section className={styles.profile_list_car_list}>

                <i className="fas fa-users"></i><p>Number of seats</p><p>{numSeats}</p>
                <i className="fas fa-gas-pump"></i><p>Fuel</p><p>{fuelType}</p>
                <i className="fas fa-suitcase"></i><p>Luggage</p><p>{luggage}</p>
                <i className="fas fa-cogs"></i><p>Transmition</p><p>{transmition}</p>
            </section>

        </section>

    );
}

export default Item;