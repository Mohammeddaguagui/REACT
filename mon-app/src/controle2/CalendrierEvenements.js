import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const CalendrierEvenements = ({ events, handleInscription }) => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Calendrier des événements</h2>
            {events.map(event => (
                <div key={event.id} className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">Date: {event.date}</p>
                    <p className="card-text">Lieu: {event.location}</p>
                    <p className="card-text">Lieu: {event.description}</p>
                    <button onClick={() => handleInscription(event.id)} className="btn btn-primary">S'inscrire</button>
                    <Link to={`/details/${event.id}`} className="btn btn-secondary ml-2">Détails</Link>
                </div>
            ))}
        </div>
    );
};
export default CalendrierEvenements;
