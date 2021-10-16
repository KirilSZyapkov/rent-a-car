import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = ({ match }) => {

    return (
        <section className={styles.form_section}>
            <form className={styles.form_container}>
                <h1>Login</h1>
                
                <hr />

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" />

                <p>By creating an account you agree to our <a href="javascript:void" >Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <Link to="/"><button type="button" className="cancelbtn">Cancel</button></Link>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>

            </form>
        </section>
    )
}

export default Login;