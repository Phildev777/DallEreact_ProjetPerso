import React from 'react';
import '../Style.css';
import Avatar from './Funccreations';

const Creations = () => {



    const avatars = [
        {
            description: "A flying car accident in Dali art",
            picture: "../../images/carsDali(1).png",
            picture1: "../../images/carsDali(2).png",
            picture2: "../../images/carsDali(3).png",
            picture3: "../../images/carsDali(4).png",
        },
        {
            description: "cat on mars eating a pizza vanghog style",
            picture: "../../images/chatMars(1).png",
            picture1: "../../images/chatMars(2).png",
            picture2: "../../images/chatMars(3).png",
            picture3: "../../images/chatMars(4).png",
        }, {
            description: "Colosseum on fire Van Gohg art",
            picture: "../../images/coliséeEnFeu(1).png",
            picture1: "../../images/coliséeEnFeu(2).png",
            picture2: "../../images/coliséeEnFeu(3).png",
            picture3: "../../images/coliséeEnFeu(4).png",
        }, {
            description: "cyborg surfer on the surface of Venus",
            picture: "../../images/cyborgSurf(1).png",
            picture1: "../../images/cyborgSurf(2).png",
            picture2: "../../images/cyborgSurf(3).png",
            picture3: "../../images/cyborgSurf(4).png",
        }, {
            description: "A dragon spits footballs to destroy a 3D wall",
            picture: "../../images/dragonBallon(1).png",
            picture1: "../../images/dragonBallon(2).png",
            picture2: "../../images/dragonBallon(3).png",
            picture3: "../../images/dragonBallon(4).png",
        }, {
            description: "mirage in a red desert representing a futuristic city in cartoon",
            picture: "../../images/mirageRouge(1).png",
            picture1: "../../images/mirageRouge(2).png",
            picture2: "../../images/mirageRouge(3).png",
            picture3: "../../images/mirageRouge(4).png",
        },

    ];
    return <div>

        <div className="cards">

            <ul>
                {avatars.map((avatar) => {
                    return <Avatar{...avatar} />
                })};
            </ul>
        </div>
    </div>




};

export default Creations;