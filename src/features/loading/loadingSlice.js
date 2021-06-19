import {createSlice} from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
})

export const {setIsLoading} = loadingSlice.actions

export const selectIsLoading = (state) => state.loading.isLoading

export default loadingSlice.reducer
