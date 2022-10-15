/* import lottie from react lottie telecherger le json */
import './Style.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './components/Accueil';
import Creations from './components/Creations';
import Infos from './components/Infos';

class App extends Component {
    render() {
        return (
            <Router>

                <div className='App'>

                    <ul className="App-header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Creations">Creations</Link>
                        </li>
                        <li><Link to="/Infos">Infos</Link>
                        </li>

                    </ul>
                    <Routes>
                        <Route exact path='/' element={< Accueil />}></Route>
                        <Route exact path='/Creations' element={< Creations />}></Route>
                        <Route exact path='/Infos' element={< Infos />}></Route>
                    </Routes>
                </div>
            </Router>

        );
    }
}

export default App;







