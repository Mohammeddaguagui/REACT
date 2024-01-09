import React, { useState } from 'react'
import { UpdateUser } from './Action'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
function Updateuser() {
  const { id } = useParams()
  const user = useSelector((data => data.users.find((u) => u.id === parseInt(id))))
  const [item, setItem] = useState({
    id: user.id,
    nom: user.nom || '',
    prenom: user.prenom || '',
    age: user.age || '',
  });
  const dispatch = useDispatch()

  const handelChange = (e) => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }
  
  const handeSubmit = () => {
    dispatch(UpdateUser(item));
  }


  return (
    <div>
      {console.log(item)}
      <div class="mb-3">
        <label for="" class="form-label">Nom</label>
        <input type="text" value={item.nom} name="nom" onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Prenom</label>
        <input type="text" value={item.prenom} name="prenom" onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Age</label>
        <input type="text" name="age" value={item.age} onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      </div>
      <Link to="/"> <button type="button" onClick={handeSubmit} class="btn btn-primary">modifiiiii</button></Link>
    </div>
  )
}

export default Updateuser