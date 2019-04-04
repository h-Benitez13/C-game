import React from 'react';
import "./CharacterCard.css";

const Toon = props => (
    <div className="card" onClick={() => props.clickedToon(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)
export default Toon;