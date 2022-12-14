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
                <div className="page-complet">
                    <header>

                        <div className="header-complet">
                            <div id="loH1">
                                <h1>Dall-E's inspirations</h1>
                                <img src="https://openai.com/assets/images/favicon.svg?v=7c363146dc" alt="logo" className='logo' />
                            </div>

                            <div className='App'>

                                <ul className="App-header">

                                    <li>
                                        <Link to="/" className='liquid'><span>Home</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/Creations" className='liquid'><span>Creations</span></Link>
                                    </li>
                                    <li><Link to="/Infos" className='liquid'><span>Infos</span></Link>
                                    </li>


                                </ul>
                                <Routes>
                                    <Route exact path='/' element={< Accueil />}></Route>
                                    <Route exact path='/Creations' element={< Creations />}></Route>
                                    <Route exact path='/Infos' element={< Infos />}></Route>
                                </Routes>
                            </div>
                        </div>
                    </header>
                    <body>

                    </body>
                    <footer>
                        <div className="footer-base">
                            <p>Creator : BERRA Philippe octobre 2022</p>

                        </div>

                    </footer>
                </div>
            </Router>

        );
    }
}

export default App;







