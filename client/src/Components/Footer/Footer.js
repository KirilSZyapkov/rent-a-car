import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={styles.footerBar}>
            
                <img src="/logo.png" alt="logo" className={styles.footerLogo} />
                <p>© 2019 All Rights Reserved. Design by Kiril</p>

            
        </div>
    )
}

export default Footer;