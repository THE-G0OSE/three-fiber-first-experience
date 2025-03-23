import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/provider/store/store";
import { enumAxis } from "@/shared";
import { enumType } from "@/shared/model";

interface IRotation {
    slider: {
        x: number;
        y: number;
        z: number;
    };
    drag: {
        x: number;
        y: number;
        z: number;
    }
}
    
const initialState: IRotation = {
    slider: {
        x: 0,
        y: 0,
        z: 0,
    },
    drag: {
        x: 0,
        y: 0,
        z: 0,
    }


}

type actionPayload = {
    type: enumType,
    axis: enumAxis,
    value: number,
}

export const rotationSlice = createSlice({
    name: 'rotation',
    initialState,
    reducers: {
        setRotation: (state, action: PayloadAction<actionPayload>) => {
            state[action.payload.type][action.payload.axis] = action.payload.value 
        },
        addRotation: (state, action: PayloadAction<actionPayload>) => {
            state[action.payload.type][action.payload.axis] += action.payload.value
        },
        removeRotation: (state, action: PayloadAction<actionPayload>) => {
            state[action.payload.type][action.payload.axis] -= action.payload.value
        }
    }
})

export const selectRotation = (state: RootState) => state.rotation

export const {setRotation, addRotation, removeRotation} = rotationSlice.actions;

export default rotationSlice.reducer