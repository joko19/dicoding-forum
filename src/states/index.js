import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './authUser/reducer'
import isPreloadReducer from './isPreload/reducer'
import usersReducer from './users/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'
import threadsReducer from './thread/reducer'
import leaderboardsReducer from './leaderboard/reducer'
import threadDetailReducer from './threadDetail/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer
  }
})

export default store
