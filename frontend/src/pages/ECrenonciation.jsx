import React from "react";


const ECrenonciation = () => {

    return (
        <div className="row container-height">
            <div className="container">
                <div>
                    <p>
                        <b>Se tromper ça arrive! Vous souhaitez renoncer à votre contrat XXXXXXXXX {/*TODO: numero de contrat ici*/}</b>
                    </p>
                </div>

                <div>
                    <p><b>Conditiions de renonciation de votre contrat:</b></p>
                    <p>A la signature d'un contrat d'assurance, le signataire a le droit de se rétracter (annuler) pour se désengager de ce contrat.</p>

                    <p>Pour un contrat signé via internet vous avez <b>14 jours</b> pour vous rétracter (annuler). Mais, si vous signez un contrat d'assurance dont la date d'effet <b>(date démarrage de l'assurance) a moins de 7 jours</b>(démarrage immédiat ou dans 7 jours), alors la rétraction de l'assurance est <b>impossible.</b></p>

                    <p>Par contre, pour un contrat signé mais dont la date d'effet ne prend que lus tard(dans minimum 1 semaine, un mois), vous avez bien 14 jours de délai de rétractation</p>
                </div>
            </div>
        </div>
    )
}

export default ECrenonciation