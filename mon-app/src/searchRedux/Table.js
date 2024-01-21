import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Delete, Search } from './action';
function Table() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const usersFilter = useSelector(state => state.usersFilter)
    const Fi = usersFilter ? usersFilter : data;
    //    const [vsearch,setVsearch]=useState('')

    const HamdeFilter = (e) => {
          
        dispatch(Search(e))

    }

    return (
        <div>
            <input type='search' onChange={(e) => HamdeFilter(e.target.value)} placeholder='search' />
            {/* <button type="button" onClick={HamdeFilter} class="btn btn-primary">Button</button> */}
            <div class="table-responsive">
                <table class="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">nom </th>
                            <th scope="col">prenom</th>
                            <th scope="col">age</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Fi.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nom}</td>
                                <td>{item.prenom}</td>
                                <td>{item.age}</td>
                                <td><button type="button" onClick={() => dispatch(Delete(item.id))} class="btn btn-primary">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table