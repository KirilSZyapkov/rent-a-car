import styles from './Card.module.css';
import {Link} from 'react-router-dom';

function Card() {
    return (
        <article className={styles.card_container}>
            <h2>Product Card Product </h2>

            <div className={styles.card_content}>
                <img className={styles.card_img} src="https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg" alt="Denim Jeans" />
                <h1>Price for Rent</h1>
                <p className={styles.card_prie}>$19.99</p>
                <p className={styles.card_description}>Some text about the jeans.Super slim and comfy lorem ipsum lorem jeansum.Lorem jeamsun denim lorem jeansum.</p> 
                <Link to="/catalog/details/:id"><p><button>Add to Cart</button></p></Link>
            </div>
        </article>
    )
}

export default Card;

// .card_description - max text length = 107
// h2 - max text length = 21