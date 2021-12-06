import { useState, useEffect } from 'react';

import SocialData from './SocialData/SocialData';
import Item from './ListCard/Item';
import SocialForm from './SocialForm/SocialForm';

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
    }, [url]);

    async function addSocialData(data) {
        const body = {
            id: sessionStorage.getItem('userId'),
            data: data
        }
        try {
            const respons = await api.put('/profile/add-social-media', body);
            setUser(respons);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <section className={styles.profile}>
            <article className={styles.profile_information}>
                <h2>{user.userName}</h2>
                <section className={styles.profile_img}>
                    <img src="/img_avatar.png" alt="profile" />
                </section>
                <section className={styles.profile_contacts}>
                    <div className={styles.profile_contacts_add_details}>
                        <h3>Contacts</h3> <button><i class="fas fa-ellipsis-h"></i></button>
                    </div>

                    <SocialForm socialData={user.mySocialData} addSocialData={addSocialData} />
                    {user.mySocialData?.length > 0 ? user.mySocialData.map(d => <SocialData key={d.name} data={d} />) : "No data found"}

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
                        <p>You didn't booked any car!</p>
                    }

                </article>
            </section>
        </section>
    );
}

export default Profile;