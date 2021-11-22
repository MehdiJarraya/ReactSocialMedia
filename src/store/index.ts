import { configureStore } from '@reduxjs/toolkit'
import preferenceReducer from "./Slice/index"

// ...

export const store = configureStore({
  reducer: {
    preference: preferenceReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
