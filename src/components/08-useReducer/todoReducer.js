

export const todoReducer = (state = [] , action) => {


    // Lo recomendable es utilizar un switch, 
    // siempre y cuando las condiciones sean puntuales

    switch ( action.type ) {
        // para añadir el nuevo todo utilizo el spread para hacer una copia de mis todos anteriores
        // y añado el todo con el action.payload
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
    
        case 'toggle-old':
            return state.map(todo => {

                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done:!todo.done
                    }
                } else {
                    return todo
                }
               
            //    ( todo.id === action.payload) ? {...todo, done:!todo.done} :  todo;
            });

            // Aqui el return esta impplicito
            case 'toggle':
                return state.map(todo => 
                    (todo.id === action.payload) ? {...todo, done:!todo.done} : todo)

        // El default se llama cuando se inicializa, por eso retorna el state.
        default:
            return state;
    }
    
}