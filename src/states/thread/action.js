import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  TOGGLE_UPVOTE_THREAD: "TOGGLE_UPVOTE_THREAD",
  TOGGLE_DOWNVOTE_THREAD: "TOGGLE_DOWNVOTE_THREAD",
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator({ id }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      id,
    },
  };
}

function downVoteThreadActionCreator({ id }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      id,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThread({id}) {
  return async (dispatch) => {
    
    dispatch(upVoteThreadActionCreator({ id }));
    
    try {
      await api.upVoteThread(id);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteThreadActionCreator({ id }));
    }
  };
}

function asyncDownVoteThread({id}) {
  return async (dispatch) => {
    
    dispatch(downVoteThreadActionCreator({ id }));
    
    try {
      await api.downVoteThread(id);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteThreadActionCreator({ id }));
    }
  };
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
};
