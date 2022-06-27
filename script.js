
//Action
const BUY_PHONE = 'BUY_PHONE';

function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

// Reducer

// (prevState, action) => newState

const initialState = {
    phones: 5
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE: 
            return {
                ...state,
                phones: state.phones - 1
            }
    
        default:
            return state;
    }

}

const store = Redux.createStore(reducer);

console.log(store);

const availablePhones = document.getElementById('count');
availablePhones.innerHTML = store.getState().phones;

document.getElementById('buy-phone').addEventListener('click', ()=>{
    store.dispatch(buyPhone());

});

store.subscribe(()=>{
    availablePhones.innerHTML = store.getState().phones;
})