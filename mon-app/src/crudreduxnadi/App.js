import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Userlist from './Userlist';
import UpdateUser from "./UpdateUser"
import AddUser from './AddUser';
export default function app (){
    return(
<div >
            <BrowserRouter>
                <Routes>
                   
                        <Route path="/" element={<Userlist />}> </Route>
                        <Route path="/add-user" element={<AddUser />}></Route>
                        <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
                   


                </Routes>

            </BrowserRouter>
        </div>
        
    )
}
