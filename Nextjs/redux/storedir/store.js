import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../pages/features/posts/postSlice'
import usersReducer from '../pages/features/users/usersSlice'

export const store =configureStore({
    reducer:{
        posts:postsReducer,
        users:usersReducer,
    }
})