import styles from './SocialData.module.css';

function SocialData({ data }) {

    const name = Object.keys(data);
    return (
        <section>
            <div className={styles.social}>
                <h2 className={styles.social_h2}>
                    {Object.keys(data)}
                </h2>
                <span>
                    <p className={styles.social_p}>
                        {data[name]}
                    </p>
                </span>
            </div>
        </section>
    );
}

export default SocialData;