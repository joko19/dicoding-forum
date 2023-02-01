import api from '../../utils/api'

const ActionType = {
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT'
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
  toggleLikeCommentActionCreator,
  asyncToogleLikeComment
}
