import styles from './Nav.module.css';

const Nav = (props) => {
    return (
        <div className={styles.navBar}>
            <nav className={styles.nav}>
                <ul className={styles.nav_ul}>

                    <li>
                        <p>Catalog</p>
                    </li>
                    <li>
                        <p>Add new carr</p>
                    </li>
                    <li>
                        <p>About Us</p>
                    </li>
                    <li>
                        <p>Logout</p>
                    </li>
                
                </ul>
            </nav>       
        </div>
    )
}

export default Nav;