import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { deleteUser } from './Action'
export default function Userlist() {
    const users = useSelector(data => data.users)
    const dispatch =useDispatch()
    const handeldelete = (id)=>{
        dispatch(deleteUser(id))
    }
    return (
        <>
            <Link to="/add-user">
                <button>adduseer</button>
            </Link>
            {console.log(users)}
            <div class="table-responsive">

                <table class="table table-primary">
                    <thead>
                        <tr>
                            
                            <th scope="col">id</th>
                            <th scope="col">nom</th>
                            <th scope="col">prenom </th>
                            <th scope="col">age </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td scope="row">{user.id}</td>
                                        <td>{user.nom}</td>
                                        <td>{user.prenom}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`/updateuser/${user.id}`} >
                                                <button>edit</button>
                                            </Link>
                                            <button onClick={()=>handeldelete(user.id)}>delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>



    )
}