import { useState, useEffect } from 'react';

import SocialData from '../Profile/SocialData/SocialData';
import Item from '../Profile/ListCard/Item';

import styles from './User.module.css';
import * as api from '../../Services/api';

function User({
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

    return (
        <section className={styles.user}>
            <article className={styles.user_information}>
                <h2>{user.userName}</h2>
                <section className={styles.user_img}>
                    <img src="/img_avatar.png" alt="user" />
                </section>
                <section className={styles.user_contacts}>
                    <div className={styles.user_contacts_add_details}>
                        <h3>Contacts</h3>
                    </div>

                    {user.mySocialData?.length > 0 ? user.mySocialData.map(d => <SocialData key={d.name} data={d} />) : "No data found"}

                </section>
            </article>
            <section className={styles.records}>
                <article className={styles.user_list}>
                    <h2>Cars</h2>
                    {user.myRecords?.map(car => <Item key={car._id} {...car} />)}

                </article>

            </section>
        </section>
    );
}

export default User;