import React from 'react';
import './Style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Accueil = () => {

    return (
        <div>
            <body>
                <header>
                    <h2>Dall-E's inspirations</h2>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li><link to="/Creations">Creations</link></li>
                            <li>Infos</li>

                        </ul>
                    </nav>


                </header>
                <main>


                    <h2>ENTER</h2>

                </main>
                <footer>
                    <h3>creator</h3>
                </footer>
                <script src="home.js"></script>
            </body>


        </div>
    );
};

export default Accueil;
