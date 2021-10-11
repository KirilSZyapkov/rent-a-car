import styles from './HomePage.module.css';

const HomePage = (props) => {
    return (
        <section className={styles.landing_page}>
            <article className={styles.content_container}>
                <h1>Find your best car Here For rent</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </article>
            <h2>VARIETY OF CARS</h2>
            <section className={styles.container_img}>
                <img src="/car_img1.png" alt="img"/>
                <img src="/car_img2.png" alt="img"/>
                <img src="/car_img3.png" alt="img"/>
            </section>
        </section>
    )
}

export default HomePage;