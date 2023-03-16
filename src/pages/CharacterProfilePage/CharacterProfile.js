import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CharacterProfile.css";

export default function CharacterProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            ).json();

            setCharacter(data);
        };

        dataFetch();
    }, [id]);


    return (
        <div className="character-profile">
            <button className="action_back" onClick={() => navigate(-1)}>
                Go back
            </button>
            <div className="character-profile_hero">
                <img className="character_avatar" src={character.image} alt="character" />
                <h1 className="character-profile_name">{character.name}</h1>
            </div>
            <h2 className="info_header">Informations</h2>
            <div className="profile-info">
                <div className="info_gender">
                    <h3>Gender</h3>
                    <p>{character.gender || "unknown"}</p>
                </div>
                <div className="info_status">
                    <h3>Status</h3>
                    <p>{character.status || "unknown"}</p>
                </div>
                <div className="info_specie">
                    <h3>Specie</h3>
                    <p>{character.specie || "unknown"}</p>
                </div>
                <div className="info_origin">
                    <h3>Origin</h3>
                    <p>{character.origin?.name || "unknown"}</p>
                </div>
                <div className="info_type">
                    <h3>Type</h3>
                    <p>{character.type || "unknown"}</p>
                </div>
            </div>
        </div>
    );
}
