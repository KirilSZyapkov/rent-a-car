import styles from './Catalog.module.css';
import Card from './CatalogCard/Card';

const Catalog = (props) => {
    return (
        <section className={styles.catalog_container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
                        
        </section>

    )
}

export default Catalog;

