// Reducer2.js
import { createSlice, configureStore } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    tableData: [
      { id: 1, nom: 'Brahim', prenom: 'Farjani' },
      { id: 2, nom: 'Yassine', prenom: 'Lekhal' },
      { id: 3, nom: 'Brahim', prenom: 'Farjani' },
      { id: 4, nom: 'Said', prenom: 'Aba Toutab' }
    ]
  },
  reducers: {
    Ajouter: (state, action) => {
     // state.tableData.push({ ...action.payload, id: state.tableData.length + 1 });
      state.tableData = [...state.tableData,{...action.payload,id: state.tableData.length + 1}]
    },
    Supprimer: (state, action) => {
      state.tableData = state.tableData.filter((user) => user.id !== action.payload);
    }
  }
});

export const { Ajouter, Supprimer } = tableSlice.actions;

const store = configureStore({
  reducer: tableSlice.reducer
});

export default store;















// import { createStore } from 'redux';

// export const Add = (user) => {
//     return { type: 'Ajouter', user };
// }

// export const Delete = (id) => {
//     return { type: 'Supprimer', id };
// }

// export const Search = (e) => {
//     return { type: 'Search', e };
// }

// const initialState = {
//     tableData: [
//     {id: 1, nom: 'Brahim', prenom: 'Farjani'},
//     {id: 2, nom: 'Yassine', prenom: 'Lekhal'},
//     {id: 3, nom: 'Brahim', prenom: 'Farjani'},
//     {id: 4, nom: 'Said', prenom: 'Aba Toutab'}
// ]};

// const tableReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'Ajouter':
//             return {...state, tableData:[...state.tableData,{...action.user,id: state.tableData.length + 1}]}
//         case 'Supprimer':
//             return {...state, tableData: state.tableData.filter((index) => index.id !== action.id),};
//         // case 'Search':
//         //         return {...state, filtredData: state.tableData.filter((index) => index.nom.toLowerCase().includes(action.e.toLowerCase())),};
//         default:
//             return state;
//     }
// };

// const store = createStore(tableReducer);
// export default store;
