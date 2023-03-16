import React from 'react';
import "./CharExerpt.css";

export default function CharExerpt(props) {
    const { id, name, species, imgURL } = props;
    return (
        <div id={id} className="character">
            <div className="character_logo" style={{backgroundImage: `url(${imgURL})`}}>
            </div>
            <div className="character_description">
                <p className="character_name">{name}</p>
                <p className="character_species">{species}</p>
            </div>
        </div>
    );
}

