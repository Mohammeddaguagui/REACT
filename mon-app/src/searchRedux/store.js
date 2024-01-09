import { legacy_createStore as createStore } from 'redux'

const initialiser = {
    data: [

        { id: 1, nom: 'tayssir', prenom: 'miaad', age: 19 },
        { id: 2, nom: 'brahim', prenom: 'farjani', age: 19 },
    ],
}

const reducer = (state = initialiser, action) => {

    switch (action.type) {

        case 'ajouter':
            return { ...state, data: [...state.data, { ...action.valeur, id: state.data.length + 1 }] }
        case 'delete':
            return { ...state, data: [...state.data.filter(item => item.id !== action.valeur)] }
        case 'search':
            return { ...state, usersFilter: [...state.data.filter(item => item.nom.includes(action.valeur))] }


        default:
            return state
    }
}
export default reducer
export const store = createStore(reducer)

