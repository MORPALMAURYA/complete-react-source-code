import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/CounterSlice'
export const store = configureStore({
    reducer:{
        count:counterReducer
    }
})

