export const adduser =(user)=>{
    return {type:"Add user",payload:user}
}
export const UpdateUser =(newuser)=>{
    return {type:"update user",payload:newuser}
}

export const deleteUser =(id)=>{
    return {type:"delete user",payload:id}
}