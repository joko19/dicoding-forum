import { ActionType } from './action'

function commentsReducer (Comments = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments
    default:
      return Comments
  }
}

export default commentsReducer
