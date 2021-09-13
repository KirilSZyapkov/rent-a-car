import { Switch, Route } from 'react-router-dom';


import './App.css';


import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Catalog from './Components/Catalog/Catalog';

function App() {
  return (
    <div className="App">
      <div className="body_container">
        <Nav />
        
        <Switch>

          <Route path="/"  exact component={HomePage} />
          <Route path="/catalog" component={Catalog} />

        </Switch>

        <Footer />
      </div>

    </div>
  );
}

export default App;
