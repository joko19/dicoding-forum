import api from '../../utils/api'

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL'
}

function addCommentActionCreator (comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment
    }
  }
}

function receiveThreadDetailActionCreator (threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  }
}

function clearThreadDetailActionCreator () {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL
  }
}

function toggleLikeThreadDetailActionCreator (userId) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
    payload: {
      userId
    }
  }
}

function asyncAddComment ({ id, content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ id, content })
      dispatch(addCommentActionCreator(comment))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncReceiveThreadDetail (threadId) {
  return async (dispatch) => {
    try {
      const threadDetail = await api.getThreadDetail(threadId)
      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncToogleLikeThreadDetail () {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState()
    dispatch(toggleLikeThreadDetailActionCreator(authUser.id))

    try {
      await api.toggleLikeThread(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToogleLikeThreadDetail,
  addCommentActionCreator,
  asyncAddComment
}
