
//Action
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';

function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

function buyTablet() {
    return {
        type: BUY_TABLET
    }
}

// Reducer

// (prevState, action) => newState

const initialState = {
    phones: 5,
    tablets: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE: 
            return {
                ...state,
                phones: state.phones <= 0 ? 0 : state.phones - 1
            }
        case BUY_TABLET:
            return {
                ...state,
                tablets: state.tablets <= 0 ? 0 : state.tablets - 1
            }
    
    
        default:
            return state;
    }

}

const store = Redux.createStore(reducer);

console.log(store);

const availablePhones = document.getElementById('count');
let btn = document.getElementById('buy-phone');
const availableTablets = document.getElementById('count-tab');
let btnTab = document.getElementById('buy-tab');
availablePhones.innerHTML = store.getState().phones;
availableTablets.innerHTML = store.getState().tablets;

btn.addEventListener('click', ()=>{
    store.dispatch(buyPhone());

});

btnTab.addEventListener('click', ()=>{
    store.dispatch(buyTablet());

});

store.subscribe(()=>{
    
    if (store.getState().phones == 0) {
        availablePhones.innerHTML = store.getState().phones;
        btn.style.display = "none";
    } else {
        availablePhones.innerHTML = store.getState().phones;
        
    }
})

store.subscribe(()=>{
    
    if (store.getState().tablets == 0) {
        availableTablets.innerHTML = store.getState().tablets;
        btnTab.style.display = "none";
    } else {
        availableTablets.innerHTML = store.getState().tablets;
        
    }
})


