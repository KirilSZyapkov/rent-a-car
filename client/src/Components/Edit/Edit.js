import styles from './Edit.module.css';
import { Link } from 'react-router-dom';

function Edit(props) {
    
    return (
        <section className={styles.container}>
            <form>
                <article className={styles.form_heading}>
                    <h1>Edit Car</h1>
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
                        <input className={styles.form_input} type="text" placeholder="Enter fuel type" name="fueltype" />

                        <label htmlFor="transmitiontype"><b>Transmition type</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter transmition type" name="transmitiontype" />

                        <label htmlFor="luggage"><b>Luggage</b></label>
                        <input className={styles.form_input} type="text" placeholder="Enter number of luggages" name="luggage" />
                    </section>
                    <section className={styles.clearfix}>
                        <Link to="/catalog/details/:id"><button type="button" className={styles.cancelbtn}>Cancel</button></Link>
                       
                        <button type="submit" className={styles.createbtn}>Save</button>
                    </section>
                </article>
            </form>
        </section>
    )
}

export default Edit;