import {configureStore} from '@reduxjs/toolkit'
import rotationReducer from '../../../feature/rotation/model/RotationSlice'
import { sizeReducer } from '@/feature/size'

export const store = configureStore({
    reducer: {
        rotation: rotationReducer,
        size: sizeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch