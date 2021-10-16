import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = ({ match }) => {

    return (
        <section className={styles.form_section}>
            <form className={styles.form_container}>
                <h1>Login</h1>

                <hr />

                <label for="email"><b>Email</b></label>
                <input className={styles.form_login} type="text" placeholder="Enter Email" name="email" />

                <label for="psw"><b>Password</b></label>
                <input className={styles.form_login} type="password" placeholder="Enter Password" name="psw" />

                <p>By creating an account you agree to our <a href="javascript:void" >Terms & Privacy</a>.</p>

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