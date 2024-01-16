import { createAsyncThunk, createSlice, current , nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const ApiCall = createAsyncThunk('TodoApi', async()=>{
    try{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        return data.data
    }
    catch(err){
        console.log(err);
    }
})

const initialState = {
    todoContainer:{
        isLoading:false,
        data:null,
        isError:false
    },
    chartData : {
        line:[
            {
                label:"Jan",
                revenue: 64854
            },
            {
                label:"Feb",
                revenue: 34854
            },
            {
                label:"Mar",
                revenue: 114854
            },
            {
                label:"Apr",
                revenue:834854
            },
            {
                label:"May",
                revenue:934854
            },
            {
                label:"Apr",
                revenue:104854
            },
            {
                label:"Jun",
                revenue:234854
            },
            {
                label:"Jul",
                revenue:14854
            },
        ],
        bar:{
            revenueData: [150,280,550],
            lossData : [50,150,300]
        },
        doughnut:{
            revenue:[200,300,400]
        }
    }
}

const RedSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = action.payload
            state.todoContainer.data.unshift({...todo,id:nanoid()})
        },
        markdone:(state,action)=>{
            state.todoContainer.data = current(state.todoContainer.data).map(item=> {
                if(item.id === action.payload){
                    return({...item,mark:true})
                }
                return item
            })
            console.log(state.todoContainer.data);
        },
        remove:(state,action)=>{
            state.todoContainer.data = state.todoContainer.data.filter((item)=> item.id !== action.payload)
        },
        doughnutRevenueEdit:(state,action)=>{
            state.chartData.doughnut.revenue = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(ApiCall.pending,(state)=>{
            state.todoContainer.isLoading=true
        });
        builder.addCase(ApiCall.fulfilled,(state,action)=>{
            state.todoContainer.isLoading=false;
            const newarray = action.payload.map(obj=> ({...obj,mark:false,id:nanoid()}))
            // console.log(newarray);
            state.todoContainer.data = newarray
        });
        builder.addCase(ApiCall.rejected,(state)=>{
            state.todoContainer.isError = true
        })
    }
})

export const {addTodo,markdone,remove,doughnutRevenueEdit} = RedSlice.actions
export default RedSlice.reducer
