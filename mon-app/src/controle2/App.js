import React, { useState } from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import CalendrierEvenements from './CalendrierEvenements';
import DetailsEvenement from './DetailsEvenement';
import MesInscriptions from './MesInscriptions';
const App = () => {
    const [events, setEvents] = useState([
        { id: 1, name: 'regarde match', date: '2024-01-20', location: 'casablanca', description: 'maroc vs brazil' },
        { id: 2, name: 'egarde un film', date: '2024-02-10', location: 'migarama', description: 'spiderman' },
    ]);
    const [inscriptions, setInscriptions] = useState([]);
    const handleInscription = (id) => {
        const event = events.find(e => e.id === id);
        if (event && !inscriptions.find(i => i.id === id)) {
            setInscriptions([...inscriptions, event]);
        }
    };
    const handleDesinscription = (id) => {
        setInscriptions(inscriptions.filter(i => i.id !== id));
    };
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Mon App Événements</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Calendrier des événements</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mes-inscriptions" className="nav-link">Mes inscriptions</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<CalendrierEvenements events={events} handleInscription={handleInscription} />} />
                    <Route path="/details/:id" element={<DetailsEvenement events={events} inscriptions={inscriptions} />} />
                    <Route path="/mes-inscriptions" element={<MesInscriptions inscriptions={inscriptions} handleDesinscription={handleDesinscription} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
