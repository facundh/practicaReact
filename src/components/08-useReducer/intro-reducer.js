
// Primer paso: inicializo mi estado

const initialState = [{
    id: 1, 
    todo:'Estudiar React',
    done:false
}];

// Segundo paso: creo mi reducer, el cual recibe dos parametros el state (que es lo que siempre debe devolver un reducer)
// y una action que es lo que MODIFICA mi state

const todoReducer = (state = initialState, action) => {

    // Quinto paso: Aqui dentro es donde yo necesito hacer algo para modificar el state y añadir el nuevo todo
    // A parte del if debemos consultar si existe una action entonces que analice el tipo eso lo hacemos agregando el signo de
    // preguntar al action ?
    if(action?.type === 'agregar'){
        // Copio el estado anterior y agrego un nuevo todo
        return [...state, action.payload];
    }
    // tercer paso: los reducer devuelven siempre un estado
    return state;
}

// Guardo mis todos en una variable
let todos = todoReducer();



//  cuarto Paso: Ejemplo para añadir un nuevo elemento a ese todoReducer , este newTodo lod ebo enviar a mi reducer mediante la ACTION 

const newTodo = {
    id:2,
    todo:'Estudiar Javascript',
    done:false
}

// Sexto paso: Debemos crear una ACTION 

const action = {
    // Septimo paso: le informamos al reducer que tipo de accion es 
    type:'agregar',
    // agregams el payload es un estandar que se usa
    payload: newTodo

}

// Octavo paso agregar el todo

todos = todoReducer(todos, action);

console.log(todos);