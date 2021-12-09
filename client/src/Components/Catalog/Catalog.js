import { Component } from 'react';
import OutOfStock from '../OutOfStock/OutOfStock';

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
        try {

            const res = await api.get('/catalog');
            this.setState({ cars: res });

        } catch (err) {

            if (err.message === 'Failed to fetch') {
                this.props.history.push('/server-down');
            } else {
                alert(err.message);
            }
        }
    }

    async componentDidUpdate(prevStatr, prevProps) {

        try {

            const res = await api.get('/catalog');
            if (prevProps.cars.length !== res.length) {
                this.setState({ cars: res });
            }

        } catch (err) {
            if (err.message === 'Failed to fetch') {

                this.props.history.push('/server-down');
            } else {
                alert(err.message);
            }
        }
    }

    // async componentDidUpdate(prevStatr, prevProps) {
    //     const res = await api.get('/catalog');

    //     if (prevProps.cars.length !== res.length) {
    //         this.setState({ cars: res });
    //     }
    // }

    render() {


        return (
            <>
                {this.state.cars.length !== 0 ?
                    <section className={styles.catalog_container}>
                        {this.state.cars.length > 0
                            ?
                            this.state.cars.map(x => <Card key={x._id} {...x} />)
                            :
                            <h1>Loading ...</h1>}
                    </section>
                    :
                    <OutOfStock />
                }
            </>


        )
    }
}

export default Catalog;