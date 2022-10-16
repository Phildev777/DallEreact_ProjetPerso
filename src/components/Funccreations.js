import { useState } from 'react';
import './Creations.css';

const Avatar = ({ description, picture, picture1, picture2, picture3 }) => {

    const [selected, setSelected] = useState(false);

    return (

        <div className="avatar">
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="img-series">
                <img src={picture} alt="image" ></img>
                <img src={picture1} alt="image1"></img>
                <img src={picture2} alt="image2"></img>
                <img src={picture3} alt="image3"></img>
            </div>

            <br />
            <button onClick={() => setSelected(!selected)}>
                {selected ? "dans votre panier" : "Ajouter"}
            </button>

        </div>
    );
};

export default Avatar;