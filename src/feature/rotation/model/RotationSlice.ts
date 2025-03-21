import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/provider/store/store";

interface IRotation {
    rotationX: number;
    rotationY: number;
    rotationZ: number;
}
    
const initialState: IRotation = {
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0
}

export enum enumRotateDirection {
    X = 'rotationX',
    Y = 'rotationY',
    Z = 'rotationZ',
}

type actionPayload = {
    direction: enumRotateDirection,
    value: number
}

export const rotationSlice = createSlice({
    name: 'rotation',
    initialState,
    reducers: {
        setRotation: (state, action: PayloadAction<actionPayload>) => {
           state[action.payload.direction] = action.payload.value 
        },
        addRotation: (state, action: PayloadAction<actionPayload>) => {
            state[action.payload.direction] += action.payload.value
        },
        removeRotation: (state, action: PayloadAction<actionPayload>) => {
            state[action.payload.direction] -= action.payload.value
        }
    }
})

export const selectRotation = (state: RootState) => state.rotation

export const {setRotation, addRotation, removeRotation} = rotationSlice.actions;

export default rotationSlice.reducer