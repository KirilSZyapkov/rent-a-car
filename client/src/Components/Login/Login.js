import styles from './Login.module.css';

const Login = (props) => {
    return (
        <section id={styles.viewForm}>
            <h2>Login:</h2>
            <form id={styles.formLogin} action="/auth/login" method="POST">
                <label htmlFor="username">Username:</label>
                <input className={styles.inputForm} type="text" id="username" name="username" placeholder="Enter your Username" value=""/>
                <label htmlFor="password">Password:</label>
                <input className={styles.inputForm} type="password" id="password" name="password" placeholder="Enter your Password"/>
                <input type="submit" className="login" value="Login"/>
            </form>
        </section>
    )
}

export default Login;