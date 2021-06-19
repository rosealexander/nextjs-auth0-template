import {createSlice} from '@reduxjs/toolkit'

export const draftsSlice = createSlice({
    name: 'drafts',
    initialState: {
        drafts: [],
    },
    reducers: {
        setDrafts: (state, action) => {
            state.drafts = action.payload
        },
    },
})

export const {setFeed} = draftsSlice.actions

export const selectDrafts = (state) => state.drafts.drafts

export default draftsSlice.reducer
