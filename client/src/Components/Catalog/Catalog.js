import { useEffect, useState } from 'react';

import styles from './Catalog.module.css';
import Card from './CatalogCard/Card';

const Catalog = (props) => {

    const [data, setData] = useState({})

    useEffect(async () => {
        async function fetchData() {

            const respons = await fetch('http://localhost:5000/catalog', {
                method:'GET'

            });
            const data = await respons.json();
            console.log(data);
        }
        fetchData();
    }, [])

    return (
        <section className={styles.catalog_container}>
            <Card />
            <Card />

        </section>

    )
}

export default Catalog;

