import { ActionType } from './action'

function threadsReducer (Threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads
    case ActionType.ADD_THREAD:
      return [...Threads]
    case ActionType.TOGGLE_UPVOTE_THREAD:
      return Threads
    case ActionType.TOGGLE_DOWNVOTE_THREAD:
      return Threads
    default:
      return Threads
  }
}

export default threadsReducer
