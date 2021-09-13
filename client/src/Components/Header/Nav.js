import styles from './Nav.module.css';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className={styles.navBar}>
            <nav className={styles.nav}>
                <ul className={styles.nav_ul}>

                    <li>
                        <Link to = "catalog"><p>Catalog</p></Link>
                    </li>
                    <li>
                        <p>Add new car</p>
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