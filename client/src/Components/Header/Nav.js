import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <header>
            <section className={styles.navbar_logo}>
                <Link to="/"> <img src="/lg.png" alt="logo" /></Link>
            </section>
            <section className={styles.navbar_links}>
                <ul>
                    <Link to="/catalog">
                        <li>Catalog</li>
                    </Link>
                    <Link to="/create">
                        <li>Add new car</li>
                    </Link>
                    <Link to="/contacts">
                        <li>About Us</li>
                    </Link>
                    <Link to="#">
                        <li>User</li>
                    </Link>
                    <Link to="#">
                        <li>Logout</li>
                    </Link>
                    <Link to="/user/login">
                        <li>Login</li>
                    </Link>
                    <Link to="/user/register">
                        <li>Register</li>
                    </Link>
                </ul>
            </section>
        </header>
    )
}

export default Nav;