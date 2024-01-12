import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type counterState= {
    value : number
}

const initialState : counterState = {
    value : 0
}
const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            if(state.value >0){
                state.value-=1
            }
        },
        incrementByValue : (state,action:PayloadAction<number>) =>{
            state.value += action.payload
        },
        decrementByValue : (state,action:PayloadAction<number>) =>{
            state.value -= action.payload
        }
    }
})


export const {increment,incrementByValue,decrement,decrementByValue} = counterSlice.actions;
export const counterValue = (state:{counter : counterState})=>state.counter.value;
export default counterSlice.reducer;