import React, { useState } from 'react'
import Ajouter from './Ajouter'
import Table from './Table'
import Edite from './Edite'
import Search from './Search'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navebar from './Navebar'
export default function App() {
    const data = [
        { id: 1, name: 'miaad', prenom: 'tayssir' },
        { id: 2, name: 'hiba', prenom: 'frid' },
        { id: 3, name: 'mohamed', prenom: 'tayssir' },
    ]

    const [user, setUser] = useState(data)

    const add = (item) => {
        item.id = user.length + 1
        setUser([...user, item])
    }
    const Delet = (id) => {
        setUser(user.filter(fil => fil.id !== id))
    }

    const [SearchVal, setSearch] = useState('')
    const [Searching, setSearching] = useState(false)
    const search = () => {
        setUser(data.filter(item => item.name.toLowerCase().includes(SearchVal.toLowerCase())))
        setSearching(true)
    }




    const [edite, setEdite] = useState(false)
    const init = { id: null, name: '', prenom: '' }
    const [current, setCurrent] = useState(init)
    const Modifier = (item) => {
        setEdite(true)
        setCurrent(item)
    }
    const updateUser = (newUser) => {
        setUser(
            user.map((user) => (user.id === current.id ? newUser : user))
        );
        setCurrent(init);
        setEdite(false);
    };


    return (

        <div >
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Navebar />}>
                        <Route path="Affichage" element={<Table Modifier={Modifier} Delet={Delet} user={user} />}></Route>
                        <Route path="Ajouter" element={<Ajouter add={add} />}></Route>
                        <Route path="modifier" element={<Edite updateUser={updateUser} current={current} />}></Route>
                        <Route path="search" element={<Search search={search} setSearch={setSearch} user={user} Searching={Searching} />}></Route>
                    </Route>


                </Routes>

            </BrowserRouter>
        </div>
    )
}
