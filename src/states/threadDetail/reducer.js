import { ActionType } from './action'

function threadDetailReducer (threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        likes: threadDetail.likes.includes(action.payload.userId)
          ? threadDetail.likes.filter((id) => id !== action.payload.userId)
          : threadDetail.likes.concat(action.payload.userId)
      }
    case ActionType.ADD_COMMENT:
      return { ...threadDetail, comment: [action.payload.comment, ...threadDetail.comments] }
    case ActionType.CLEAR_THREAD_DETAIL:
      return null
    default:
      return threadDetail
  }
}

export default threadDetailReducer
