import styles from './OutOfStock.module.css';

function OutOfStock() {
    return (
        
            <img className={styles.out_of_stock_img} src='/out_of_stock.png' alt="out of stock" />
        
    );
}

export default OutOfStock;