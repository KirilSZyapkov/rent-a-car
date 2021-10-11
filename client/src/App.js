import {Switch, Route} from 'react-router-dom';


import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Catalog from './Components/Catalog/Catalog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contacts from "./Components/AboutUs/Contacts";

function App() {
    return (
        <div className="App">
            <div className="body_container">
                <Nav/>

                <Switch>

                    <Route path="/" exact component={HomePage}/>
                    <Route path="/catalog" component={Catalog}/>
                    <Route path="/user/login" component={Login}/>
                    <Route path="/user/register" component={Register}/>
                    <Route path="/contacts" component={Contacts}/>

                </Switch>

                <Footer/>
            </div>

        </div>
    );
}

export default App;
