import {configureStore} from '@reduxjs/toolkit'
import rotationReducer from '../../../feature/rotation/model/RotationSlice'

export const store = configureStore({
    reducer: {
        rotation: rotationReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch