

export const todoReducer = (state = [] , action) => {


    // Lo recomendable es itulizar un switch, 
    // siempre y cuando las condiciones sean puntuales

    switch ( action.type ) {
        // case 'add':
            
        //     break;
    
        default:
            return state;
    }
}