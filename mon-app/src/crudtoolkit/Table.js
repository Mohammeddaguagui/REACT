import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Supprimer } from "./Reducer2";

export default function Table() {
    const dispatch = useDispatch();
    const [IndeE, setIndeE] = useState('')
    const tableData = useSelector((state) => state.tableData.filter((index) => index.nom.toLowerCase().includes(IndeE.toLowerCase())));

    const handleDelete = (id) => {
        dispatch(Supprimer(id))
    }

    return (
        <div className='col-6'>
            <input type='text' className="form-control m-2 w-50" placeholder='search' onChange={(e) => setIndeE(e.target.value)} />
            <table className='table'>
                <thead>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.nom}</td>
                                <td>{row.prenom}</td>
                                <td>
                                    <button className='btn btn-outline-danger border-warning' onClick={() => handleDelete(row.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
