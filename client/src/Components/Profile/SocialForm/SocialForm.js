import styles from './SocialForm.module.css'

function SocialForm({
    socialData,
    addSocialData,
    show
}) {

    const data = socialData || [];

    function add(e) {
        e.preventDefault();
        const target = e.target;

        const body = {
            facebook: target.facebook.value,
            instagram: target.instagram.value,
            twitter: target.twitter.value,
            email: target.email.value,
            phone: target.phone.value,
        }


        addSocialData(body);
    }

    return (
        <form onSubmit={add} className={styles.form_container}>
            <h2>Add your contacts</h2>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="facebook"><b>Facebook</b></label>
                <input className={styles.input_field} type="text" placeholder="Facebook" name="facebook" defaultValue={(data[0] || {}).facebook} />
            </div>

            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="instagram"><b>Instagram</b></label>
                <input className={styles.input_field} type="text" placeholder="Instagram" name="instagram" defaultValue={(data[1] || {}).instagram} />
            </div>

            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="twitter"><b>Twitter</b></label>
                <input className={styles.input_field} type="text" placeholder="Twitter" name="twitter" defaultValue={(data[2] || {}).twitter} />
            </div>

            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="email"><b>Email</b></label>
                <input className={styles.input_field} type="text" placeholder="E-mail" name="email" defaultValue={(data[3] || {}).email} />
            </div>

            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="phone"><b>Phone</b></label>
                <input className={styles.input_field} type="text" placeholder="Phone" name="phone" defaultValue={(data[4] || {}).phone} />
            </div>

            <button type="submit" className={styles.btn}>Register</button>
            <button onClick={show} type="button" className={styles.btn_cancel}>Cancel</button>
        </form>
    );
}

export default SocialForm;