import { RootState } from "@/app";
import { enumAxis } from "@/shared";
import { enumType } from "@/shared/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface payloadType {
    type: enumType,
    axis: enumAxis,
    value: number,
}

interface sizeState {
    slider: {
        x: number
        y: number
        z: number
    },
    drag: {
        x: number
        y: number
        z: number
    }
}

const initialState: sizeState = {
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

export const SizeSlice = createSlice({
    name: 'size',
    initialState,
    reducers: {
        setSize: (state, action: PayloadAction<payloadType>) => {
            state[action.payload.type][action.payload.axis] = action.payload.value
        }
    }
})

export const selectSize = (state: RootState) => state.size
export const {setSize} = SizeSlice.actions;
export const sizeReducer = SizeSlice.reducer