import {createSlice} from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        data: [],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
    },
})

export const {setData} = postSlice.actions

export const selectData = (state) => state.post.data

export default postSlice.reducer
