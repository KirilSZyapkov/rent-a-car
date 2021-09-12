import './App.css';

import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
      <div className="App">
          <div className="body_container">
              <Nav />
              <HomePage/>
              <Footer/>
          </div>

    </div>
  );
}

export default App;
