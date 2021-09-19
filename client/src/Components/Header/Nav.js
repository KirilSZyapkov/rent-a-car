import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className={styles.navBar}>

            <span className={styles.nav_span}>
                <Link to="/catalog"><p>Catalog</p></Link>
                <Link to="catalog"><p>Add new car</p></Link>
                <Link to="/about-us"><p>About Us</p></Link>

                <Link to="/user/login"><p id={styles.login}>Login</p></Link>
                <Link to="/user/register"><p id={styles.register}>Register</p></Link>
                <Link to="#"><p id={styles.user}>Hello User</p></Link>
                <Link to="#"><p id={styles.logout}>Logout</p></Link>

            </span>
            
        </div>
        
    )
}

export default Nav;