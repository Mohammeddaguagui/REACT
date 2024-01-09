import React, { useEffect, useState } from 'react'
import Ajouter from './Ajouter'
import Table from './Table'
import Edite from './Edite'
import Search from './Search'
import TestBrocod from './TestBrocod'
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

    ///const [SearchVal, setSearch] = useState("")
    const search = (e) => {
        setUser(data.filter(item => item.name.toLowerCase().includes(e.toLowerCase())))
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
        <div>
            {edite ? (<Edite updateUser={updateUser} current={current}/>):(<Ajouter add={add}/>)}
            <Search search={search} /*setSearch={setSearch}*/ />
            <Table Modifier={Modifier} Delet={Delet} user={user} />
            <TestBrocod TestBrocod={TestBrocod}/>
        </div>
    )
}
