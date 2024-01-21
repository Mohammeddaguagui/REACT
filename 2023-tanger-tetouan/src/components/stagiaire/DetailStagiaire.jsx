import React from 'react';
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Stagiaire from "./Stagiaire";

const DetailStagiaire = () => {
    const {nom} = useParams()
    const det = useSelector((state) => state.find((e) => e.nom === nom))
    return (

    <div className={'container'}>
        <Link to={'/'}>Back</Link>
        <img src={det.image}/>
        <p className={'name'}> {det.nom}</p>
        <p className={'name'}> {det.prenom}</p>
        <p className={'name'}> {det.filiere}</p>
    </div>
)};

export default DetailStagiaire;