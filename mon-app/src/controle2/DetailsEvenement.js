import React from 'react';
import { useParams } from 'react-router-dom';
const DetailsEvenement = ({ events, inscriptions }) => {
    const { id } = useParams();
    const fil = events.find(e => e.id === parseInt(id));
    const isRegistered = inscriptions.find(i => i.id === fil.id);
    return (
        <div>
            <h2 className="mt-4 mb-3">Détails de l'événement</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{fil.name}</h5>
                    <p className="card-text">Date: {fil.date}</p>
                    <p className="card-text">Lieu: {fil.location}</p>
                    <p className="card-text">Description: {fil.description}</p>
                    <p>{isRegistered ? 'Inscrit' : 'Non inscrit'}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsEvenement;
