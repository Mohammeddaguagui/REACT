import React from 'react';
import styles from './listStagiaire.module.css';
import {useSelector} from "react-redux";
import Stagiaire from "./Stagiaire";

const ListStagiaire = () => {
    const stagiaires = useSelector((state) => state)
    return (
        <div className={styles.container}>
            {stagiaires.map((e, key) => <Stagiaire key={key} image={e.image} nom={e.nom}
              />)}
        </div>
    );
}

export default ListStagiaire;