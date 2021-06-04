import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterItem.module.css';

const CharacterItem: React.FC = ({ id, name, imageUrl }) => {
    return (
        <div>
            <Link 
                to={`/detail/${id}`}
                className={styles.link}
            >
                <figure>
                    <img src={imageUrl} alt={name} className={styles.img} />
                    <figcaption>{name}</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default CharacterItem;
