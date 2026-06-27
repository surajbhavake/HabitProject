import {configureStore} from '@reduxjs/toolkit';
import habitSlice from './HabitsSlice';

export const store = configureStore({
    reducer: {
        habits : habitSlice
    }
})