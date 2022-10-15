import { useState } from 'react';
import '../Style.css';

const Avatar = ({ description, picture }) => {

    const [selected, setSelected] = useState(false);

    return (

        <div className="avatar">
            <li><p>{description}</p></li>

            <li><img src={picture} ></img></li>

            <button onClick={() => setSelected(!selected)}>
                {selected ? "dans votre panier" : "Ajouter"}
            </button>

        </div>
    );
};

export default Avatar;