import { ActionType } from './action'

function threadsReducer (Threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads
    case ActionType.ADD_THREAD:
      return [...Threads]
    case ActionType.TOGGLE_UPVOTE_THREAD:
      return Threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          const oldUpvotes = thread.upVotesBy
          return { ...thread, upVotesBy: [...new Set([...oldUpvotes, action.payload.userId])], downVotesBy: [thread.downVotesBy.filter(item => item !== action.payload.userId)] }
        }
        return thread
      })
    case ActionType.TOGGLE_DOWNVOTE_THREAD:
      return Threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          const oldDownvotes = thread.downVotesBy
          return { ...thread, upVotesBy: [thread.upVotesBy.filter(item => item !== action.payload.userId)], downVotesBy: [...new Set([...oldDownvotes, action.payload.userId])] }
        }
        return thread
      })
    default:
      return Threads
  }
}

export default threadsReducer
