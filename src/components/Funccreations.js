import { useState } from 'react';
import '../Style.css';

const Avatar = ({ description, picture, picture1, picture2, picture3 }) => {

    const [selected, setSelected] = useState(false);

    return (

        <div className="avatar">
            <p>{description}</p>
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