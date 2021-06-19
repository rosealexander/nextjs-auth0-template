import {createSlice} from '@reduxjs/toolkit'

export const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        feed: [],
    },
    reducers: {
        setFeed: (state, action) => {
            state.feed = action.payload
        },
    },
})

export const {setFeed} = blogSlice.actions

export const selectFeed = (state) => state.blog.feed

export default blogSlice.reducer
