import React from 'react';

import styles from './SearchBox.module.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input
                className={styles.SearchBox} 
                type='search' 
                placeholder={ placeholder }
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBox;