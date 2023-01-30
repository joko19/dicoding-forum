import api from '../../utils/api'

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT'
}

function addCommentActionCreator (comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment
    }
  }
}

function toggleLikeCommentActionCreator ({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      commentId,
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

function asyncToogleLikeComment (commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleLikeCommentActionCreator({ commentId, userId: authUser.id }))

    try {
      await api.toggleLikeComment(commentId)
    } catch (error) {
      alert(error.message)
      dispatch(toggleLikeCommentActionCreator({ commentId, userId: authUser.id }))
    }
  }
}

export {
  ActionType,
  addCommentActionCreator,
  toggleLikeCommentActionCreator,
  asyncAddComment,
  asyncToogleLikeComment
}
