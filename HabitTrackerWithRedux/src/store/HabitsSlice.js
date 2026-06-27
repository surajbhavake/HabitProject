import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../api/api';





export const fetchHabits = createAsyncThunk(
    'habits/fetchHabits',

    async ()=>{
        const response = await api.get('habits/');
        return response.data;
    }
);


export const createHabit = createAsyncThunk(
    'habits/createHabit',
    async(habitData)=>{
        const response = await api.post('habits/',habitData);

        return response.data
    }
)

export const removeHabit = createAsyncThunk(
    'habits/removeHabit',
    async(id)=>{
        const response = await api.delete(`habits/${id}/`);
        return id;
    }
)

export const editHabit = createAsyncThunk(
    'habits/editHabit',
    async(habitData)=>{
        const response = await api.put(`habits/${habitData.id}/`,habitData);
        return response.data
    }
)

export const toggleHabit = createAsyncThunk(
    'habits/toggleHabit',
    async(habit)=>{

        const updatedData = {
            ...habit,
            completion_status : !habit.completion_status
        }
        const response = await api.patch(`habits/${habit.id}/`,updatedData);
        return response.data;
    }
)



// const savedHabit = localStorage.getItem('habits')

// If savedHabits has data (which counts as "true"), 
// it runs JSON.parse(savedHabits). Otherwise (if it counts as "false"), it runs []
const initialState = {
   habits :[],
    status: 'idle',
    error: null
   
}

export const habitsSlice = createSlice({
    name : 'habits',
    initialState,


    extraReducers:(builder)=>{
        builder

        .addCase(
            fetchHabits.pending,(state)=>{
                state.status = 'loading'
            }
        )
        .addCase(fetchHabits.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        
        .addCase(
            fetchHabits.fulfilled,
            (state,action)=>{
                state.status = 'succeeded'
                state.habits = action.payload
            }
        )

        .addCase(
            createHabit.fulfilled,
            (state,action)=>{
                state.habits.push(action.payload)
            }
        )
        .addCase(
            removeHabit.fulfilled,
            (state,action)=>{

                const HabitToDelete = action.payload
                state.habits = state.habits.filter((h)=>(
                    h.id !== HabitToDelete
                ))
            }
        )
        .addCase(
            editHabit.fulfilled,
            (state,action)=>{
                const index = state.habits.findIndex((h)=>(
                    h.id === action.payload.id
                    
                ))

                state.habits[index] = action.payload;

            }
        )
        .addCase(
            toggleHabit.fulfilled,
            (state,action)=>{
                const index = state.habits.findIndex((h)=>(
                    h.id === action.payload.id
                ))

                state.habits[index] = action.payload;
            }

        )
    },





    reducers:{
        addHabit:(state,action)=>{
            const addHabit = {
                id : Date.now(),
                habitName : action.payload.habit,
                CompletionStatus : action.payload.CompletionStatus,
            }
            state.habits.push(addHabit)
        },
        // toggleHabit:(state,action)=>{

        //     const HabitToToggle = action.payload
        //     const indexToToggle = state.habits.findIndex((habit)=>(
        //         habit.id === HabitToToggle
        //     ))
        //     // const updateToggle = state.habits.map((habit,index)=>{
        //     //     if(index === indexToToggle){
        //     //         return {...habit,CompletionStatus:!habit.CompletionStatus}
        //     //     }
        //     //     return habit
        //     // })

        //     // state.habits = updateToggle

        //     state.habits[indexToToggle].CompletionStatus = !state.habits[indexToToggle].CompletionStatus
        // },
        deleteHabit:(state,action)=>{
            const HabitToDelete = action.payload
            state.habits = state.habits.filter((habit,index)=>(
                habit.id !== HabitToDelete
            ))
        },
        updateHabit:(state,action)=>{
            const HabitToUpdated = action.payload.id

            const indexToUpdated = state.habits.findIndex((habit)=>(
                habit.id === HabitToUpdated
            ))

            // const updateChanges = state.habits.map((habit,index)=>{
            //     if(index === indexToUpdated){
            //         return{habitName : action.payload.habit,CompletionStatus : action.payload.CompletionStatus}
            //     }
            //     return habit;
            // })

            // state.habits = updateChanges

            state.habits[indexToUpdated].habitName = action.payload.habit;
            

            
        }
    }

})

export const CompletedCount = (state) => {
    return state.habits.habits.filter((habit)=>(
        habit.completion_status
    )).length
}  

export const TotalHabits = (state) =>(state.habits.habits.length)


    

export const {addHabit,deleteHabit,updateHabit} = habitsSlice.actions;
export default habitsSlice.reducer