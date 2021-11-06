import { useEffect, useState } from 'react';

import styles from './Catalog.module.css';
import Card from './CatalogCard/Card';

import * as api from '../../Services/api';

const Catalog = (props) => {

    const [data, setData] = useState({})

    useEffect(async () => {
        async function fetchData() {

            const data = await api.get('/catalog');
            
            console.log("catalog>>"+data);
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

