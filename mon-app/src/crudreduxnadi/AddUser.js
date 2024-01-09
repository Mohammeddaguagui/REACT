import React, { useState } from 'react'
import { adduser } from './Action'
import { useDispatch, useStore } from 'react-redux'
import { Link } from 'react-router-dom'
function Ajouter() {
  const [item,setItem]=useState("")
  const  dispatch=useDispatch()
  const count=useStore(data=>data)
    const handelChange=(e)=>{
        const {name,value}=e.target
        setItem({...item,[name]:value})
    }
    

    const handeSubmit=()=>{
       
        dispatch(adduser(item))
        

    }


  return (
    <div>
        <div class="mb-3">
          <label for="" class="form-label">Nom</label>
          <input type="text" name="nom" onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Prenom</label>
          <input type="text" name="prenom"  onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Age</label>
          <input type="text" name="age"  onChange={handelChange} id="" class="form-control" placeholder="" aria-describedby="helpId"/>
        </div>
       <Link to="/"> <button type="button" onClick={handeSubmit} class="btn btn-primary">Ajouter</button></Link>
    </div>
  )
}

export default Ajouter