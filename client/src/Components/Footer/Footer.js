import styles from './Footer.module.css'

export const Footer = (props) => {
    return (
        <div className={styles.footerBar}>
            <div className={styles.footerContainer}>
                <img src="/logo.png" alt="logo" className={styles.footerLogo} />
                <p>Copyright © 2021 Rent a Car Inc</p>

            </div>
        </div>
    )
}

export default Footer;