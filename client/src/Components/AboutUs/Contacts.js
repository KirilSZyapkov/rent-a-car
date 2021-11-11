import {Component} from 'react';
import styles from './Contacts.module.css';

class Contacts extends Component {

    render() {
        return (
            <section>
                <div className={styles.about_section}>
                    <h1>About Us Page</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, minus.</p>
                </div>

                <h2 className={styles.our_team}>Our Team</h2>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <img src="/personOne.jpg" alt="Jane"/>
                            <div className={styles.container}>
                                <h2>Jane Doe</h2>
                                <p className={styles.title}>CEO & Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
                                <p>
                                    TEL: 0123456789
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.card}>
                            <img src="im2.jpg" alt="Mike"/>
                            <div className={styles.container}>
                                <h2>Mike Ross</h2>
                                <p className={styles.title}>Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p>
                                    TEL: 0123456789
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.card}>
                            <img src="personThree.jpg" alt="John"/>
                            <div className={styles.container}>
                                <h2>John Doe</h2>
                                <p className={styles.title}>Designer</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>john@example.com</p>
                                <p>TEL: 0123456789</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Contacts;
