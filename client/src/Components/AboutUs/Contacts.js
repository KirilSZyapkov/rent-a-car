import { Component } from 'react';
import styles from './Contacts.module.css';




class Contacts extends Component {

    componentDidMount() {
        this.renderMap()
    }

    renderMap = () => {
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyD4L8RDcj8kbyrnKW8IOdNcaONvuGAYUGY&callback=initMap&libraries=&v=weekly')
        window.initMap = this.initMap;
    }

    initMap = () => {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new window.google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
    }
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
                            <img src="/personOne.jpg" alt="Jane" />
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
                            <img src="im2.jpg" alt="Mike" />
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
                            <img src="personThree.jpg" alt="John" />
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

                <div className={styles.map_container}>
                    <div>
                        <h2>Contact Us</h2>
                        <p>Swing by for a cup of coffee, or leave us a message: </p>
                    </div>

                    <div className={styles.map} id="map"></div>

                </div>

            </section>
        );
    }
}

function loadScript(url) {
    let index = window.document.getElementsByTagName('script')[0];
    let script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}

export default Contacts;
