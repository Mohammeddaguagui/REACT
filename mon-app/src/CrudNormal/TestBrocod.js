import React, { useState } from 'react'

function TestBrocod() {

  const [Car, setCar] = useState({
    year: "",
    mark: "",
    model: "",
  })
  const handelecar = (e) => {
    setCar(c => ({ ...c, year: e.target.value }));
  }
  const handelemark = (e) => {
    setCar(c => ({ ...c, mark: e.target.value }));
  }
  const handelemodel = (e) => {
    setCar(c => ({ ...c, model: e.target.value }));
  }
  const [a, setA] = useState("")
  const aff = (e) => {
    setA(e.target.value)
  }
  const [b, setB] = useState("")
  const se = (e) => {
    setB(e.target.value)
  }
  return (
    <>
      <p>your favourite car is : {Car.year} {Car.mark} {Car.model}</p>
      <input type="number" value={Car.year} onChange={handelecar} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      <input type="text" value={Car.mark} onChange={handelemark} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      <input type="text" value={Car.model} onChange={handelemodel} id="" class="form-control" placeholder="" aria-describedby="helpId" />
      <textarea value={a} onChange={aff}></textarea>
      <p>text : {a}</p>
      <select value={b} onChange={se}>
        <option value="">select choix</option>
        <option value="maroc">maroc</option>
        <option value="alger">alger</option>
        <option value="france">france</option>
      </select>
      <p>affiche :{b}</p>
    </>
  )
}
export default TestBrocod;
