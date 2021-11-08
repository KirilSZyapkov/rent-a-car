import styles from '../Profile.module.css';
import { Link } from 'react-router-dom';

function Item() {
    return (
        <section className={styles.profile_list_car}>
            <Link to="/catalog/details/:id"><h3 className={styles.profile_list_car_title}>Car Model</h3></Link>
            <section className={styles.profile_list_car_list}>

                <i className="fas fa-users"></i><p>Number of seats</p><p>4</p>
                <i className="fas fa-gas-pump"></i><p>Fuel</p><p>Disel</p>
                <i className="fas fa-suitcase"></i><p>Luggage</p><p>3</p>
                <i className="fas fa-cogs"></i><p>Transmition</p><p>Auto</p>
            </section>

        </section>

    );
}

export default Item;