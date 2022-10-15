import React from 'react';
import '../Style.css';
import Avatar from './Funccreations';

const Creations = () => {



    const avatars = [
        {
            description: "Nebula in a bottle",
            picture: "src/components/images/nebulainbottle1.png",
            picture1: "./images/photo.png"
        },
        {
            description: "Sym",
            picture: "https://placekitten.com/200/139"
        },
        {
            description: "Léo",
            picture: "https://placekitten.com/200/90"
        },
        {
            description: "Milo",
            picture: "https://placekitten.com/200/194"
        },
        {
            description: "Charly",
            picture: "https://placekitten.com/200/179"
        },
    ];
    return <div className="cards">

        <ul>
            {avatars.map((avatar) => {
                return <Avatar{...avatar} />
            })};
        </ul>
    </div>





};

export default Creations;