import { createStore, Store } from "redux";
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';
import { configureStore } from "@reduxjs/toolkit";


const store: Store = configureStore({ reducer: contadorReducer });
store.subscribe(() => {
    console.log('Subscribe:', store.getState());
    

});

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);


