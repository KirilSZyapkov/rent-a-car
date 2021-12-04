import { useState, useEffect } from 'react';

import styles from './Edit.module.css';
import { Link } from 'react-router-dom';
import * as api from '../../Services/api';

function Edit({
    match,
    history
}) {

    const url = match.url;

    const [car, setCar] = useState({});
    const userId = sessionStorage.getItem('userId');
    const token = sessionStorage.getItem('authToken');

    useEffect(() => {
        async function fetchData() {
            const respons = await api.get(url);
            setCar(respons);
        };
        fetchData();
    }, [url]);

    async function editCar(e) {
        e.preventDefault();
        const target = e.target;
        const carModel = target.carmodel.value.trim();
        const price = Number(target.price.value.trim());
        const imgURL = target.imgURL.value.trim();
        const numberseats = Number(target.numberseats.value.trim());
        const fuelType = target.fueltype.value.trim();
        const transmitiontype = target.transmitiontype.value.trim();
        const luggage = Number(target.luggage.value.trim());
        const description = target.description.value.trim();

        const body = {
            userId,
            carModel,
            price,
            imgURL,
            numberseats,
            fuelType,
            transmitiontype,
            luggage,
            description
        }

        try {
            await api.put(url, body);
            history.push('/catalog');
        } catch (err) {
            alert(err.message);
        }
    }

    if (!token) {
        sessionStorage.clear();
        history.push('/user/register');
    }

    return (
        <section className={styles.container}>
            <form onSubmit={editCar}>
                <article className={styles.form_heading}>
                    <h1>Edit Car</h1>
                    <p>Please fill in this form to create new car.</p>
                </article>
                <article className={styles.form_article_container}>
                    <section className={styles.form_section_container}>
                        <label htmlFor="carmodel"><b>Car Model</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter Model" name="carmodel" defaultValue={car.carModel} />

                        <label htmlFor="price"><b>Price for rent</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter Price" name="price" defaultValue={car.price} />

                        <label htmlFor="carimage"><b>Car image</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter url" name="imgURL" defaultValue={car.imgURL} />

                        <label htmlFor="numberseats"><b>Number of seats</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of seats" name="numberseats" defaultValue={car.numSeats} />

                        <label htmlFor="fultype"><b>Fuel</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter fuel type" name="fueltype" defaultValue={car.fuelType} />

                        <label htmlFor="transmitiontype"><b>Transmition type</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter transmition type" name="transmitiontype" defaultValue={car.transmition} />

                        <label htmlFor="luggage"><b>Luggage</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of luggages" name="luggage" defaultValue={car.luggage} />

                        <label htmlFor="description"><b>Description</b></label>
                        <textarea rows="4" cols="50" className={styles.form_input} type="text" placeholder="Enter some description" name="description" defaultValue={car.description} />
                    </section>
                    <section className={styles.clearfix}>
                        <Link to={`/catalog/details/${car._id}`}><button type="button" className={styles.cancelbtn}>Cancel</button></Link>

                        <button type="submit" className={styles.createbtn}>Save</button>
                    </section>
                </article>
            </form>
        </section>
    )
}

export default Edit;