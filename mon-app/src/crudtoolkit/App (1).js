import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ajouter from './Ajouter';
import Table from './Table';

const App = () => {

    return (
        <div className='constainer'>
            <div className='row'>
                <Ajouter />
                <Table />
            </div>
        </div>
    );
};

export default App;
