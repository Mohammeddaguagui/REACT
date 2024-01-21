import React from 'react';
const MesInscriptions = ({ inscriptions, handleDesinscription }) => {
    return (
        <div className="container mt-4">
            <h2>Mes inscriptions</h2>
            {inscriptions.map(inscription => (
                <div key={inscription.id} className="card mb-3">
                    <p className="card-text">{inscription.name}</p>
                    <p className="card-text">{inscription.date}</p>
                    <p className="card-text">{inscription.location}</p>
                    <p className="card-text">{inscription.description}</p>
                    <button onClick={() => handleDesinscription(inscription.id)} className="btn btn-danger">Se désinscrire</button>
                </div>
            ))}
        </div>
    );
};

export default MesInscriptions;
