
const initialState = {
    users: [

        { id: 1, nom: 'tayssir', prenom: 'miaad', age: 19 },
        { id: 2, nom: 'brahim', prenom: 'farjani', age: 19 },
    ],
}
const reducer = (state=initialState,Action) =>{
    switch(Action.type){
        case "Add user":
            return {...state,users:[...state.users,{...Action.payload,id: state.users.length + 1 }]}
        case "update user":
            const {id,nom,prenom,age} = Action.payload
            return {...state,users: state.users.map((user) =>user.id === id ? { id, nom, prenom, age }: user),};
        case 'delete user':
            return { ...state, users: [...state.users.filter(u => u.id !== parseInt(Action.payload))] }
        default:
            return state
    }
    

}
export default reducer