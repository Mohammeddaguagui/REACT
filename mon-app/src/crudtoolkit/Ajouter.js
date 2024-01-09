import { useState } from 'react';
import { Ajouter } from './Reducer2';
import { useDispatch } from 'react-redux';


export default function Add () {
    const dispatch = useDispatch();
    const [User, setFormUser] = useState({})
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormUser({...User, [name]: value})
    }
    const handleAddRow = () => {
        dispatch(Ajouter(User));
        setFormUser({nom: '', prenom: ''})
    };

    return (
        <div class="col-6">
              <label for="" class="form-label">Nom</label>
              <input type="text" name="nom" value={User.nom} class="form-control" onChange={handleChange} placeholder="" aria-describedby="helpId" />
              <label for="" class="form-label">Prénom</label>
              <input type="text" name="prenom" value={User.prenom} class="form-control" onChange={handleChange} placeholder="" aria-describedby="helpId" />
              <br />
              <button className='btn btn-outline-success border-white' onClick={handleAddRow}>Ajouter</button>
            </div>
    )
}