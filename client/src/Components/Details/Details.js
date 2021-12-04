import { useState, useEffect } from 'react';

import styles from './Details.module.css';
import { Link } from 'react-router-dom';

import * as api from '../../Services/api';

function Details({
    match,
    history
}) {

    const [car, setCar] = useState({});

    useEffect(() => {
        async function fetchData() {

            const respons = await api.get(match.url);
            setCar(respons);
        }
        fetchData();


    }, [match.url]);


    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('authToken');
    let bookedCars;
    let isMyBooking;


    async function rentCar(e) {
        e.stopPropagation();
        const url = '/catalog/details/rent/' + car._id;
        const userId = sessionStorage.getItem('userId');
        const body = {
            id: userId
        }
        try {
            await api.put(url, body);
            history.push('/profile/' + userId);
        } catch (err) {
            alert(err.message);
        }
    }

    async function cancelBooking() {
        const url = '/catalog/details/cancel/' + car._id;
        const userId = sessionStorage.getItem('userId');
        const body = {
            id: userId
        }
        try {
            await api.put(url, body);
            history.push('/profile/' + userId);
        } catch (err) {
            alert(err.message);
        }
    }

    async function deleteCar(e) {
        
        const url = '/catalog/details/delete/' + car._id;
        try {

            const confirmed = window.confirm('Are you sure you want to delete this item?');
            if (confirmed) {
                await api.del(url);
            }
            history.push('/catalog');
        } catch (err) {
            alert(err.message);
        }


    }

    if (car.rentedBy) {

        bookedCars = (car.rentedBy[0] || [])._id || [];

        isMyBooking = bookedCars === userId;

    }

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
                                <>
                                    {(car._isFree === 'true') ? <Link to={`/catalog/details/rent/${match.params.id}`}><button className={styles.rentbtn} onClick={(e) => rentCar(e)}>Rent</button></Link> : ''}
                                </>
                                :
                                ''}



                            {isMyBooking && (userId !== car._owner) ?
                                <>
                                    <Link to={`/catalog/details/cancel/${match.params.id}`}><button className={styles.rentbtn} onClick={(e) => cancelBooking(e)}>Cancel</button></Link>
                                </>
                                :
                                ''}
                            <Link to="/catalog"><button className={styles.backbtn}>Back</button></Link>

                            {(userId === car._owner) ?
                                <>

                                    <Link to={`/catalog/edit/${match.params.id}`}><button className={styles.backbtn}>Edit</button></Link>
                                    <Link to={`/catalog/details/delete/${match.params.id}`}><button className={styles.deletebtn} onClick={(e) => deleteCar(e)}>Delete</button></Link>
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
