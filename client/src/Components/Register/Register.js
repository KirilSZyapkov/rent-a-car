import { useRef } from 'react'

import styles from './Register.module.css';
import { Link, useHistory } from 'react-router-dom';

import * as api from '../../Services/api'

const Register = ({ loggin }) => {

    const history = useHistory();
    
    async function register(e) {
        e.preventDefault();
        const target = e.target;
        const userName = target.username.value;
        const email = target.email.value;
        const password = target.password.value;
        const rePass = target.rePass.value;           

        const data = {
            userName: userName,
            email: email,
            password: password,
            rePass: rePass
            
        }
        try {
            await api.register(data);
            loggin();
            history.push('/catalog');

        } catch (err) {
            alert(err.message);

        }
    }

    return (
        <section className={styles.register_container}>
            <form className={styles.form_register} onSubmit={register}>

                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <label htmlFor="username"><b>User Name</b></label>
                <input className={styles.form_register} type="text" placeholder="Enter User Name" name="username" />

                <label htmlFor="email"><b>Email</b></label>
                <input className={styles.form_register} type="e-mail" placeholder="Enter Email" name="email" />

                <label htmlFor="password"><b>Password</b></label>
                <input className={styles.form_register} type="password" placeholder="Enter Password" name="password" />

                <label htmlFor="rePass"><b>Repeat Password</b></label>
                <input className={styles.form_register} type="password" placeholder="Repeat Password" name="rePass" />


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