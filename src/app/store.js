import {configureStore} from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import blogReducer from '../features/blog/blogSlice'
import draftsReducer from '../features/drafts/draftsSlice'
import postReducer from '../features/post/postSlice'
import navigationReducer from '../features/navigation/navigationSlice'
import loadingReducer from '../features/loading/loadingSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        blog: blogReducer,
        drafts: draftsReducer,
        post: postReducer,
        navigation: navigationReducer,
        loading: loadingReducer,
    },
})
