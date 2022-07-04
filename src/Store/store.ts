import {combineReducers,configureStore} from '@reduxjs/toolkit'
import LayoutReducer from './Reducers/LayoutSlice'

const rootReducer = combineReducers({
    LayoutReducer
}) 

export const setupStore = () =>{
    return configureStore({ //createStore аналогы
        reducer:rootReducer
    }) 
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
