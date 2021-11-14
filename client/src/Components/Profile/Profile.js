import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Item from './ListCard/Item';
import styles from './Profile.module.css';
import * as api from '../../Services/api';

function Profile({
    match,
    history
}) {

    const token = sessionStorage.getItem('authToken');
    const url = match.url;

    if (!token) {
        history.push('/user/register');
    }

    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {

            const respons = await api.get(url);
            setUser(respons);
        }
        fetchData();
    }, [])

    

    return (
        <section className={styles.profile}>
            <article className={styles.profile_information}>
                <h2>{user.userName}</h2>
                <section className={styles.profile_img}>
                    <img src="/img_avatar.png" alt="profile picture" />
                </section>
                <section className={styles.profile_contacts}>
                    <h3>Contacts</h3>

                    <Link to="#"><p><i class="fab fa-facebook">My Facebook</i> </p></Link>
                    <Link to="#"><p><i class="fab fa-instagram"> My Instagram</i></p></Link>
                    <Link to="#"><p><i class="fab fa-twitter"> My Twitter</i></p></Link>
                    <Link to="#"><p><i class="fas fa-phone"> My Phone</i></p></Link>
                    <Link to="#"><p><i class="far fa-envelope"> My Email</i></p></Link>
                </section>
            </article>
            <section className={styles.records}>
                <article className={styles.profile_list}>
                    <h2>My Cars</h2>
                    {(user.myRecords && (user.myRecords.length !== 0)) ? user.myRecords.map(car =>

                        <Item key={car._id} {...car} />)
                        :
                        <p>You don't have records!</p>
                    }

                </article>
                <article className={styles.profile_list}>
                    <h2>My Bookings</h2>
                    {(user.bookedCars && (user.bookedCars.length !== 0)) ? user.bookedCars.map(car =>

                        <Item key={car._id} {...car} />)
                        :
                        <p>You didn't book any car!</p>
                    }

                </article>
            </section>
        </section>
    );
}

export default Profile;