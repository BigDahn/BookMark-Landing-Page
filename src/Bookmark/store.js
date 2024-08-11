import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from './features/modalSlice/ModalSlice'

export const store = configureStore({
  reducer:{
    modal: ModalReducer,
  }
})