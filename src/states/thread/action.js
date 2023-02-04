import api from '../../utils/api'
import { asyncPopulateUsersAndThreads } from '../shared/action'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD'
}

function receiveThreadsActionCreator (threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadActionCreator (thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  }
}

function upVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function downVoteThreadActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function asyncAddThread ({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(addThreadActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncUpVoteThread ({ threadId, userId }) {
  return async (dispatch) => {
    dispatch(upVoteThreadActionCreator({ threadId, userId }))

    try {
      await api.upVoteThread(threadId)
    } catch (error) {
      alert(error.message)
      dispatch(asyncPopulateUsersAndThreads({ isLoading: false }))
    }
  }
}

function asyncDownVoteThread ({ threadId, userId }) {
  return async (dispatch) => {
    dispatch(downVoteThreadActionCreator({ threadId, userId }))

    try {
      await api.downVoteThread(threadId)
    } catch (error) {
      alert(error.message)
      dispatch(asyncPopulateUsersAndThreads({ isLoading: false }))
    }
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread
}
