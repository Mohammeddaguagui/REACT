import React from 'react'

function Search(props) {

  return (
    <div>
      {/*  <div class="mb-3">
            <label for="" class="form-label">City</label>
            <select class="form-select form-select-lg" onChange={e=>props.search(e.target.value)} name="" id="">
                <option value="">Select one</option>
                <option value="miaad">miaad</option>
                <option value="hiba">hiba</option>
              
            </select>
        </div> 

        <div class="mb-3">
        <label for="" class="form-label">Rechercher</label>
        <input type="search" name="" onChange={e => props.setSearch(e.target.value)} id="" class="form-control" placeholder="" aria-describedby="helpId" />
        <button type="button" onClick={props.search} class="btn btn-primary">Search</button>
      </div>
        */}
      <div class="mb-3">
        <label for="" class="form-label">Rechercher</label>
        <input type="search" name="" onChange={e => props.search(e.target.value)} id="" class="form-control" placeholder="" aria-describedby="helpId" />
    
      </div>
    </div>
  )
}

export default Search