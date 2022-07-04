
//Action
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';

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

function buyTv() {
    return {
        type: BUY_TV
    }
}




const initialStatePhones = {
    phones: 5,
    tablets: 10
}

const initialStateTv = {
    tv: 20,
}

const reducerPhones = (state = initialStatePhones, action) => {
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

const reducerTv = (state = initialStateTv, action) => {
    switch (action.type) {
        case BUY_TV: 
            return {
                ...state,
                tv: state.tv <= 0 ? 0 : state.tv - 1
            }
    
        default:
            return state;
    }

}

const rootReducer = Redux.combineReducers({
    phone: reducerPhones,
    tv: reducerTv
})

const store = Redux.createStore(rootReducer);

console.log(store);

const availablePhones = document.getElementById('count');
let btn = document.getElementById('buy-phone');
const availableTablets = document.getElementById('count-tab');
let btnTab = document.getElementById('buy-tab');
const availableTv = document.getElementById('count-tv');
let btnTv = document.getElementById('buy-tv');
availablePhones.innerHTML = store.getState().phone.phones;
availableTablets.innerHTML = store.getState().phone.tablets;
availableTv.innerHTML = store.getState().tv.tv;

btn.addEventListener('click', ()=>{
    store.dispatch(buyPhone());

});

btnTab.addEventListener('click', ()=>{
    store.dispatch(buyTablet());

});

btnTv.addEventListener('click', ()=>{
    store.dispatch(buyTv());

});

store.subscribe(()=>{
    
        availablePhones.innerHTML = store.getState().phone.phones;
        availableTablets.innerHTML = store.getState().phone.tablets;
        availableTv.innerHTML = store.getState().tv.tv;

})




