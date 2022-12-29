//acciones

interface Action {
    type: string;
    payload?: any;
}



function reducer(state = 10, action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }

    return state;
}

//Usar el reducer

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};


console.log(reducer(10, incrementadorAction)); // 11

const decrementarAction: Action = {
    type: 'DECREMENTAR'
};


console.log(reducer(10, decrementarAction)); // 9

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload : 2
};

console.log(reducer(10, multiplicarAction)); // 20

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload : 2
};

console.log(reducer(10, dividirAction)); // 5