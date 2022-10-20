import React from 'react';
import "./Infos.css";
import Article from './funcIfos';

const Infos = () => {




    const articles = [
        {

            title: "MICROSOFT INTÈGRE LE GÉNÉRATEUR D’IMAGE DALL-E 2 POUR AIDER À LA CRÉATION",
            sousTitre1: "Un service bientôt accessible en ligne",
            text: "Lors de sa conférence, le géant de l’informatique a annoncé que DALL-E 2, qui permet de générer des images à partir d’un texte, sera compris au sein de Microsoft Designer.Booster la productivité de tous, même des créatifs.Voilà le défi que s’est lancé Microsoft. Pour y parvenir, le géant de l’informatique a annoncé le 12 octobre, lors de sa conférence d’automne, l’intégration de Dall-E 2 au sein de la nouvelle application de sa suite Office, Microsoft Designer.Développé par OpenAI, Dall-E 2 est un générateur d’images à partir d’un texte basé sur l’intelligence artificielle. Avec cet outil, l'application de conception graphique Microsoft Designer pourra proposer des “idées de conception”. L’objectif pour l’entreprise est d’aider les créateurs à lutter contre le syndrome de la page blanche, pointe ArsTechnica.Au-delà de l’application, Panos Panay, le responsable des produits chez Microsoft, a détaillé que les outils de création seront prochainement disponibles en accès libre sur internet. DALL-E 2 sera ainsi accessible à travers le moteur de recherche Bing et le navigateur Edge de l'entreprise. Une version bêta est d’ores et déjà proposée en ligne sur inscription afin de recueillir les premières impressions des utilisateurs.Depuis son apparition, la technologie Dall-E fait l’objet d’une controverse. En utilisant l’apprentissage profond, la technologie se base sur des millions d’images trouvées sur internet pour générer ses propositions. Seul problème, la technologie se passe du consentement des artistes pour analyser leurs œuvres. De plus, les préjugés sociaux, tels que le racisme ou le sexisme, sont de fait reproduits, comme le rappelle ArsTechnica. Microsoft assure travailler avec OpenAI pour éviter tous résultats inappropriés.",
            sousTitre2: "",
            source: "Pierre Monnier, bfmtv"
        },
        {
            title: "DALL-E: L'IMPRESSIONNANT GÉNÉRATEUR D'IMAGE PAR INTELLIGENCE ARTIFICIELLE EST ACCESSIBLE À TOUS",
            sousTitre1: "Règles à respecter",
            text: "L'outil permet de générer des images photoréalistes à l'aide d'une simple requête de mots-clés. Avec certains garde-fous.'Un chat en col roulé'. C'est par cette simple requête que l'auteur de ces lignes a pu créer de toutes pièces une image photoréaliste d'un félin paré pour passer l'hiver à 19 degrés. Depuis ce 29 septembre, l'outil Dall-E est librement accessible en ligne, gratuitement, annoncent ses créateurs. Il était jusque-là réservé à une poignée d'internautes, par un système de liste d'attente.Popularisé au cours de l'année 2022, Dall-E est l'un des nombreux projets de création de contenu visuel uniquement basé sur de l'intelligence artificielle. Le système décrypte les termes inscrits par l'utilisateur (en anglais), pour ensuite les restituer sous forme d'images. Pour l'utiliser, il suffit de se rendre à cette adresse, puis de créer un compte. Les utilisateurs ont alors droit à cinquante images gratuites, puis quinze par mois. Par la suite, un lot de 115 images est vendu 15 dollars (15 euros).Sur son site, l'équipe de Dall-E évoque ses travaux sur son algorithme afin d'éviter de générer des contenus violents, sexuels, mais également associés à une personnalité publique. Le tout pour éviter toute création de contenus nocifs, frauduleux ou mensongers. Le fait d'inscrire un nom propre dans la barre de recherche génère ainsi un message d'erreur.Comme de nombreuses intelligences artificielles, Dall-E est de plus en plus précis à mesure que l'utilisateur ajoute des informations de contexte, ou des consignes quant au style de l'image générée (par exemple, ci-dessous, 'un chat avec un col roulé à la façon d'une peinture à l'huile').Pour l'heure, Dall-E est le premier outil de la sorte à se généraliser. D'autres, comme le très performant Midjourney, sont encore en phase de test. Il est toutefois possible d'y accéder en passant par Discord.Cette nouvelle façon de faire créer des oeuvres par la machine s'accompagne de houleux débats parmi les artistes. En août, un tableau généré par Midjourney a remporté un concours d'art aux Etats-Unis, suscitant la polémique.",
            sousTitre2: "",
            source: "Raphaël Grably, bfmtv"
        },
        {
            title: "",
            text: "",
            source: ""
        },


    ];
    return <body><div>
        <h2>Infos</h2>

    </div>

        <div className="cards">

            <ul>
                {articles.map((article) => {
                    return <Article{...article} />
                })};
            </ul>
        </div>
    </body>




};




export default Infos;