import React, { useState } from 'react'

function Edite(props) {
  const [edite, setEdite] = useState(props.current)
  const handelChange = (e) => {
    const { name, value } = e.target
    setEdite({ ...edite, [name]: value })
  }

  const handelSubmit = () => {
    props.updateUser(edite)
  }
  
  return (
    <div>
      <h1>Edite Formulaire</h1>
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input type='text' name='name' value={edite.name} onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">PreNom</label>
        <input type='text' name='prenom' value={edite.prenom} onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      </div>
      <button type="button" onClick={handelSubmit} class="btn btn-primary">Modifier</button>
    </div>
  )
}

export default Edite