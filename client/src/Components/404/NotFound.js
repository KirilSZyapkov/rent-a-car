import styles from './NotFound.module.css';

function NotFound(){
    return(
        <section className={styles.not_found_container}>
            <img className={styles.not_found_img} src="/not_found.png" alt="not-found"/>
        </section>
    );
}

export default NotFound;