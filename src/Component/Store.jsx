import { configureStore } from "@reduxjs/toolkit";
import Slicer from './Feature/Slice'

const Store = configureStore({
    reducer:{
        Todo:Slicer
    }
})

export default Store;