
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
                phones: state.phones <= 0 ? 0 : state.phones - 1
            }
    
        default:
            return state;
    }

}

const store = Redux.createStore(reducer);

console.log(store);

const availablePhones = document.getElementById('count');
let btn = document.getElementById('buy-phone');
availablePhones.innerHTML = store.getState().phones;

btn.addEventListener('click', ()=>{
    store.dispatch(buyPhone());

});

store.subscribe(()=>{
    
    if (store.getState().phones == 0) {
        availablePhones.innerHTML = store.getState().phones;
        btn.style.display = "none";
    } else {
        availablePhones.innerHTML = store.getState().phones;
        
    }
})