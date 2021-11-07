import styles from './CreatNewCar.module.css';
import { Link } from 'react-router-dom';
import * as api from '../../Services/api';

function CreatNewCar({ history }) {

    const user = sessionStorage.getItem('userName');

    if (!user) {
        history.push('/user/register');
    }

    async function createNewCar(e) {
        e.preventDefault();
        const userId = sessionStorage.getItem('userId');
        const token = sessionStorage.getItem('authToken');
        const target = e.target;
        const carModel = target.carmodel.value.trim();
        const price = Number(target.price.value.trim());
        const imgURL = target.imgURL.value.trim();
        const numberseats = Number(target.numberseats.value.trim());
        const fuelType = target.fuelType.value.trim();
        const transmitiontype = target.transmitiontype.value.trim();
        const luggage = Number(target.luggage.value.trim());
        const description = Number(target.description.value.trim());

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

        if (!token) {
            sessionStorage.clear();
            history.push('/user/register');
        }

        try {
            await api.post('/create', body)
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <section className={styles.container}>
            <form onSubmit={createNewCar}>
                <article className={styles.form_heading}>
                    <h1>Creat New Car</h1>
                    <p>Please fill in this form to create new car.</p>
                </article>
                <article className={styles.form_article_container}>
                    <section className={styles.form_section_container}>
                        <label htmlFor="carmodel"><b>Car Model</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter Model" name="carmodel" />

                        <label htmlFor="price"><b>Price for rent</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter Price" name="price" />

                        <label htmlFor="carimage"><b>Car image</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter url" name="imgURL" />

                        <label htmlFor="numberseats"><b>Number of seats</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of seats" name="numberseats" />

                        <label htmlFor="fultype"><b>Fuel</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter fuel type" name="fuelType" />

                        <label htmlFor="transmitiontype"><b>Transmition type</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter transmition type" name="transmitiontype" />

                        <label htmlFor="luggage"><b>Luggage</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of luggages" name="luggage" />

                        <label htmlFor="description"><b>Description</b></label>
                        <textarea rows="4" cols="50" className={styles.form_input} type="text" placeholder="Enter some description" name="description" />
                    </section>
                    <section className={styles.clearfix}>
                        <Link to="/catalog"><button type="button" className={styles.cancelbtn}>Cancel</button></Link>

                        <button type="submit" className={styles.createbtn}>Create</button>
                    </section>
                </article>
            </form>
        </section>
    )
}

export default CreatNewCar;