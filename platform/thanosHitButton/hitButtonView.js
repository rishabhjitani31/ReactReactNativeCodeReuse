import React  from 'react';

export const HitButton = ({increaseCount}) => {
    return(
        <button type="button" className="hit-button" onClick={increaseCount}>Wave Thor</button>
    )
}