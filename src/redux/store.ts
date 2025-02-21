import { configureStore } from '@reduxjs/toolkit'
import dummyReducer from './dummySlice'

export const store = configureStore({
  reducer: {
    dummy:dummyReducer,
  },
})
