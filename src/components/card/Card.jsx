import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.Card}>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    );
};

export default Card;