import React, { useState } from 'react'

function Ajouter(props) {
  const [item, setItem] = useState({})
  const handelChange = (e) => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }

  const handelSubmit = () => {
    props.add(item)
    setItem({ name: '', prenom: '' })

  }
  return (
    <div>
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input type="text" value={item.name} name="name" onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">PreNom</label>
        <input type="text" name="prenom" value={item.prenom} onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      </div>
      <button type="button" onClick={handelSubmit} class="btn btn-primary">Ajouter</button>
    </div>
  )
}

export default Ajouter