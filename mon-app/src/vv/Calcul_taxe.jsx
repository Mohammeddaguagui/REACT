import { useState } from "react";
import { useDispatch } from 'react-redux'
const Calcul_taxe = () => {
    const [carinfo, setCarinfo] = useState({ marque: '', v: '', modele: '' })
    const HandleChange = (e) => {
        const { id, value } = e.target
        setCarinfo({ ...carinfo, [id]: value })
        console.log(carinfo)
    }
    const [valeurim, setValeurim] = useState()

    let d = (valeurim * 0.175)
    let tva = (valeurim * 0.2)
    let taxe = (valeurim * 0.025)
    let info = d + tva + taxe
    const valid = () => {
        const datenow = new Date()
        const dateC = datenow.getFullYear() - carinfo.date.slice(0, 4)
        console.log(dateC)

        const u = carinfo.v
        if (dateC < 1) {
            setValeurim(u)
        }
        if (dateC <= 2 && dateC >= 1) {
            setValeurim(u * 0.8)
        }
        if (dateC <= 3 && dateC >= 2) {
            setValeurim(u * 0.8)
        }
        if (dateC >= 3) {
            setValeurim(u * 0.75)
        }

        setCarinfo({ ...carinfo, va: valeurim })
        console.log(carinfo)
        dispatch({ type: 'add', payload: carinfo })

    }


    const dispatch = useDispatch()

    return (
        <>



            <label for="" class="form-label">Marque</label>
            <input type="text" class="form-control" onChange={HandleChange} id="marque" value={carinfo.marque} aria-describedby="helpId" placeholder="" />
            <label for="" class="form-label">modele</label>
            <input type="text" class="form-control" onChange={HandleChange} id="modele" value={carinfo.modele} aria-describedby="helpId" placeholder="" />
            <label for="" class="form-label">la date</label>
            <input type="date" class="form-control" onChange={HandleChange} id="date" value={carinfo.date} aria-describedby="helpId" placeholder="" />
            <label for="" class="form-label">prix</label>
            <input type="Number" class="form-control" onChange={HandleChange} id="v" value={carinfo.v} aria-describedby="helpId" placeholder="" />
            <button type="button" onClick={valid} class="btn btn-outline-primary">Valider</button>
            <div class="table-responsive">
                <table class="table table-striped
            table-hover	
            table-borderless
            table-primary
            align-middle">
                    <thead class="table-light">
                        <h1>Table affichage</h1>
                        <tr>
                            <th>valeur taxtable</th>
                            <th>  droit</th>
                            <th> tva</th>
                            <th>taxe</th>
                            <th> montant total</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="table-primary" >
                            <td>{valeurim}</td>
                            <td>{valeurim}*0.175={d}</td>
                            <td>{valeurim}*0.2={tva}</td>
                            <td>{valeurim}*0.25={taxe}</td>
                            <td>  {info}</td>
                        </tr>

                    </tbody>

                </table>
            </div>



        </>
    )
}
export default Calcul_taxe;