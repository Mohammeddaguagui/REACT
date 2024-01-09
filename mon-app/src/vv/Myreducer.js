const initialState={tab:[]}
export const Myreducer=(state=initialState,action)=>{
    switch(action.type){
        case 'add':
            return {tab:[...state.tab,action.payload]}
            
     default:
        return state
    }
   
}