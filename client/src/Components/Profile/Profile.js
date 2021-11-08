import Item from './ListCard/Item';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

function Profile() {
    return (
        <section className={styles.profile}>
            <article className={styles.profile_information}>
                <h2>Name</h2>
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
            <article className={styles.profile_list}>
                <h2>My Cars</h2>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                
            </article>
        </section>
    );
}

export default Profile;