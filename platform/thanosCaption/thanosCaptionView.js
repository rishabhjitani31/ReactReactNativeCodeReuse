import React  from 'react';

export const ThanosCaptionView = props => {
    return (
        <div className="image-wrapper">
            <p>{props.data}</p>
            <img src="http://www.marvel-cineverse.fr/medias/images/thor-endgameprofile.jpg?fx=r_1200_800"></img>
        </div>
    )
}