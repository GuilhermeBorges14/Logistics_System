

const Initial_State = {
    userEmail: '',
    userLogin: 0,
};

function userReducer(state = Initial_State, action){
    switch(action.type){
        case 'Log_in':
            return { ... state, userLogin: 1, userEmail : action.userEmail}
        case 'Log_out': 
            return {... state, userLogin: 0, userEmail : null} 
        default:
            return state;      
    }

}

export default userReducer;