import { useState, useEffect } from 'react';

import styles from './Details.module.css';
import { Link } from 'react-router-dom';

import * as api from '../../Services/api';

function Details({
    match,
    history
}) {

    const url = match.url;
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('authToken');

    const [car, setCar] = useState({});

    useEffect(async () => {
        const respons = await api.get(url);
        setCar(respons)
        
    }, []);


    return (
        <section className={styles.details_section_container}>
            <article id={match.params.id} className={styles.details_container}>

                <div className={styles.details_head_container}>
                    <h3>{car.carModel}</h3>
                </div>
                <div className={styles.img_container}>
                    <img src={car.imgURL} alt="Avatar" />
                </div>
                <div className={styles.specification_details_container} >
                    <h2>SPECIFICATIONS</h2>
                    <ul>
                        <li><i className="fas fa-car"></i><p>Model</p><p>{car.carModel}</p></li>
                        <li><i className="fas fa-users"></i><p>Number of seats</p><p>{car.numSeats}</p></li>
                        <li><i className="fas fa-gas-pump"></i><p>Fuel</p><p>{car.fuelType}</p>  </li>
                        <li><i className="fas fa-suitcase"></i><p>Luggage</p><p>{car.luggage}</p></li>
                        <li><i className="fas fa-cogs"></i><p>Transmition</p><p>{car.transmition}</p></li>

                    </ul>

                </div>

                <footer className={styles.detailsbtn_container}>
                    <h1>Price: {car.price}€</h1>
                    {token ?
                        <>
                            {(userId !== car._owner) ?
                                <Link to={`/catalog/details/rent/${match.params.id}`}><button className={styles.rentbtn}>Rent</button></Link>
                                :
                                ''}
                            <Link to="/catalog"><button className={styles.backbtn}>Back</button></Link>

                            {(userId === car._owner) ?
                                <>

                                    <Link to={`/catalog/edit/${match.params.id}`}><button className={styles.backbtn}>Edit</button></Link>
                                    <Link to={`/catalog/details/delete/${match.params.id}`}><button className={styles.deletebtn}>Delete</button></Link>
                                </>
                                :
                                ''
                            }
                        </>
                        : ''}
                </footer>
            </article>
        </section>
    )
}

export default Details
