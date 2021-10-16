import styles from './CreatNewCar.module.css';
import { Link } from 'react-router-dom';

function CreatNewCar() {
    return (
        <section className={styles.container}>
            <form>
                <article className={styles.form_heading}>
                    <h1>Creat New Car</h1>
                    <p>Please fill in this form to create new car.</p>
                </article>
                <article className={styles.form_article_container}>
                    <section className={styles.form_section_container}>
                        <label for="carmodel"><b>Car Model</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter Model" name="carmodel" />

                        <label for="price"><b>Price for rent</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter Price" name="price" />

                        <label for="carimage"><b>Car image</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter url" name="carimage" />

                        <label for="numberseats"><b>Number of seats</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of seats" name="numberseats" />

                        <label for="fultype"><b>Fuel</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter fuel type" name="fultype" />

                        <label for="transmition"><b>Number of seats</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of seats" name="numberseats" />

                        <label for="year"><b>Year</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter year" name="year" />

                        <label for="luggage"><b>Luggage</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of luggages" name="luggage" />
                    </section>
                    <section className={styles.clearfix}>
                        <Link to="/catalog"> <button type="button" className={styles.cancelbtn}>Cancel</button></Link>
                        <button type="submit" className={styles.createbtn}>Create</button>
                    </section>
                </article>
            </form>
        </section>
    )
}

export default CreatNewCar;