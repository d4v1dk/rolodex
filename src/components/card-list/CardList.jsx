import React from 'react';

import Card from '../card/Card';
import styles from './CardList.module.css';

const CardList = (props) => {
    return (
        <div className={styles.CardList}>
            {
                props.monsters.map(
                    monster => <Card key={monster.id} monster={monster} />
                )
            }
        </div>
    );
};

export default CardList;