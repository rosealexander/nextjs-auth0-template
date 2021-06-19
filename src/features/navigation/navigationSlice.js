import {createSlice} from '@reduxjs/toolkit'

export const navigationItems = [
    {
        label: "Blog",
        pathname: "/",
        visible: true,
    },
    {
        label: "Drafts",
        pathname: "/drafts",
        visible: false,
    },
    {
        label: "Create",
        pathname: "/create",
        visible: false,
    },
]

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        selectedIndex: null,
    },
    reducers: {
        setSelectedIndex: (state, action) => {
            switch (action.payload) {
                case 0:
                case 'blog':
                    state.selectedIndex = 0
                    break;
                case 1:
                case 'drafts':
                    state.selectedIndex = 1
                    break;
                case 2:
                case 'create':
                    state.selectedIndex = 2
                    break;
                default:
                    state.selectedIndex = null
                    break;
            }
        },
        clearSelectedIndex: (state) => {
            state.selectedIndex = null
        },
    },
})

export const {setSelectedIndex, clearSelectedIndex} = navigationSlice.actions

export const selectedIndex = (state) => state.navigation.selectedIndex

export default navigationSlice.reducer
