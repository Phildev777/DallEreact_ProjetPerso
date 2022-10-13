import React from 'react';
import './Style.css';
import Avatar from './Funccreations';

const Creations = () => {

    const avatars = [
        {
            description: "Nebula in a bottle",
            picture: "src/components/images/nebulainbottle1.png",
            picture1: "./images/photo.png"
        },
        {
            description: "Symba",
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
        }
    ];
    return (
        <div className="App">
            <div className="App">{avatars.map((avatar) => {
                return <Avatar{...avatar} />
            })};
            </div>
        </div>

    );
};

export default Creations;