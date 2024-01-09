import React from 'react'
import {Link} from "react-router-dom"
function Table(props) {
    return (
        <div>

            <div class="table-responsive">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Prenom </th>
                            <th scope="col">Action </th>
                        </tr>
                    </thead>  
                    <tbody>
                        {props.user.map(item => {
                            const { id, name, prenom } = item;
                            return (
                                <tr key={id} class="">
                                    <td>{name}</td>
                                    <td>{prenom}</td>
                                    <td><button type="button" class="btn btn-success" onClick={() => props.Delet(id)} >Delete</button></td>
                                    <td><Link to='/modifier'> <button type="button" class="btn btn-primary" onClick={() => props.Modifier(item)} >Edite</button></Link></td>
                                </tr>

                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table