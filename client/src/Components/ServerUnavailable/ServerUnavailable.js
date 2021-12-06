import styles from './ServerUnavailable.module.css';

function ServerUnavailable(){
    return(
        <section className={styles.server_down}>
            <img  className={styles.server_down} src='/server_unavailable.jpg' alt='server-down'/>
        </section>
    );
}

export default ServerUnavailable;