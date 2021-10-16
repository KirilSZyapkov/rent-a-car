import styles from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = ({ match }) => {

    return (
        <section className={styles.register_container}>
            <form className={styles.form_register}>

                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <label for="username"><b>User Name</b></label>
                <input className={styles.form_register} type="text" placeholder="Enter User Name" name="username" />

                <label for="email"><b>Email</b></label>
                <input className={styles.form_register} type="e-mail" placeholder="Enter Email" name="email" />

                <label for="password"><b>Password</b></label>
                <input className={styles.form_register} type="password" placeholder="Enter Password" name="password" />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input className={styles.form_register} type="password" placeholder="Repeat Password" name="psw-repeat" />


                <p>By creating an account you agree to our <a href="javascript:void(0)">Terms & Privacy</a>.</p>

                <div className={styles.register_clearfix}>
                    <Link to="/"><button type="button" className={styles.cancelbtn}>Cancel</button></Link>
                    <button type="submit" className={styles.signupbtn}>Sign Up</button>
                </div>
                <div className={styles.container_login}>
                    <p>If you have registration <Link to="/user/login">Login.</Link></p>
                </div>

            </form>
        </section>
    )
}

export default Register;