import { configureStore } from '@reduxjs/toolkit'
import formErrorSlice from './slice/formErrorSlice'

export const store = configureStore({
  reducer: {
    error: formErrorSlice
  },
})