import {createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        style: 'light',
    },
    reducers: {
        setStyle: (state, action) => {
            switch (action.payload) {
                case 'light':
                    state.style = 'light'
                    break;
                case 'dark':
                    state.style = 'dark'
                    break;
                default:
                    break;
            }
        },
    },
})

export const {setStyle} = themeSlice.actions
export const selectStyle = (state) => state.theme.style

export default themeSlice.reducer
