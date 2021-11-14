import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Catalog from './Components/Catalog/Catalog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contacts from "./Components/AboutUs/Contacts";
import CreatNewCar from './Components/CreatCar/CreatNewCar';
import Details from './Components/Details/Details';
import Edit from './Components/Edit/Edit';
import Profile from './Components/Profile/Profile';




class App extends Component {

    constructor(props) {
        super(props);

        this.state = { isAuthenticated: sessionStorage.getItem('userName') };
       
    }

    loggin = () => {
        this.setState({ isAuthenticated: sessionStorage.getItem('userName') });
    }

    loggout = () => {
        sessionStorage.clear();
        this.setState({ isAuthenticated: sessionStorage.getItem('userName') });
    }

    render() {
        const { isAuthenticated } = this.state;

        return (
            <div className="App">

                <div className="body_container">
                    <Nav user={isAuthenticated} />

                    <Switch>

                        <Route path="/" exact component={HomePage} />
                        <Route exact path="/catalog/details/:id" component={Details} />
                        <Route exact path="/catalog/edit/:id" component={Edit} />
                        <Route path="/catalog" component={Catalog} />
                        <Route path="/create" component={CreatNewCar} />
                        <Route path="/user/login">
                            <Login loggin={this.loggin} />
                        </Route>
                        <Route path="/user/register" >
                            <Register loggin={this.loggin} />
                        </Route>
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/profile/:id" exact component={Profile}/>
                        <Route path="/logout" render={(props) => {
                            this.loggout();
                            props.history.push('/');
                        }} />


                    </Switch>

                    <Footer />
                </div>

            </div>
        );
    }
}

export default App;
