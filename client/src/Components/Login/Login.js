import styles from './Login.module.css';
import { Link, useHistory } from 'react-router-dom';

import * as api from '../../Services/api';

const Login = ({ loggin }) => {
    const history = useHistory();
    async function login(e) {
        e.preventDefault();
        const target = e.target;
        const email = target.email.value;
        const password = target.password.value;

        const data = {
            email: email,
            password: password
        }

        try {
            await api.login(data);
            loggin();
            history.push('/catalog');
        } catch (err) {

            alert(err.message);

        }

    }

    return (
        <section className={styles.form_section}>
            <form className={styles.form_container} onSubmit={login}>
                <h1>Login</h1>

                <hr />

                <label htmlFor="email"><b>Email</b></label>
                <input className={styles.form_login} type="text" placeholder="Enter Email" name="email" />

                <label htmlFor="password"><b>Password</b></label>
                <input className={styles.form_login} type="password" placeholder="Enter Password" name="password" />

                <p>By creating an account you agree to our <a href="#" >Terms and Privacy</a></p>

                <div>
                    <Link to="/"><button type="button" className={styles.cancelbtn}>Cancel</button></Link>
                    <button type="submit" className={styles.signupbtn}>Sign Up</button>
                </div>
                <div className={styles.container_signin}>
                    <p>Already have an account? <Link to="/user/register">Sign in.</Link></p>
                </div>

            </form>
        </section>
    )
}

export default Login;