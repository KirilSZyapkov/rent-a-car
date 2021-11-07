import styles from './Card.module.css';
import {Link} from 'react-router-dom';

function Card({
    _owner,
    imgURL,
    price,
    carModel,
    description,
    _id

}) {
    const url = `/catalog/details/${_id}`;
    return (
        <article id={_id} className={styles.card_container}>
            <h2>{carModel}</h2>

            <div className={styles.card_content}>
                <img className={styles.card_img} src={imgURL} alt="Denim Jeans" />
                <h1>Price for Rent</h1>
                <p className={styles.card_prie}>${price}</p>
                <p className={styles.card_description}>{description}</p> 
                <Link to={url}><p><button>Details</button></p></Link>
            </div>
        </article>
    )
}

export default Card;

