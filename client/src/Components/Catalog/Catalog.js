import { Component } from 'react';

import styles from './Catalog.module.css';
import Card from './CatalogCard/Card';

import * as api from '../../Services/api';



class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
        
    }

    async componentDidMount() {
        const res = await api.get('/catalog');
        this.setState({ cars: res });

    }

    render() {
       

        return (
            <section className={styles.catalog_container}>
                {this.state.cars.map(x =>
                    <Card key={x._id} {...x} />
                )}

            </section>

        )
    }
}

export default Catalog;