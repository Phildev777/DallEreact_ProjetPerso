import { useState } from 'react';
import './Infos.css';

const Article = ({ title, text, sousTitre1, sousTitre2, source }) => {

    const [selected, setSelected] = useState(false);

    return (

        <div className="article">
            <div className="article-title">
                <p>{title}</p>
            </div>
            <div className="sous-titre1">
                <p>{sousTitre1}</p>
            </div>
            <div className="article-text">
                <p>{text}</p>

            </div>
            <div className="sous-titre2">
                <p>{sousTitre2}</p>
            </div>
            <div className="source">
                <p>{source}</p>
            </div>


            <br />
            <button onClick={() => setSelected(!selected)}>
                {selected ? "dans votre panier" : "Ajouter"}
            </button>

        </div>
    );
};

export default Article;