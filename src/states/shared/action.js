import api from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../thread/action";
import { receiveLeaderboardActionCreator } from "../leaderboard/action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

function asyncPopulateUsersAndThreads({ isLoading }) {
  return async (dispatch) => {
    if (isLoading) {
      dispatch(showLoading());
    }
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const leaderboards = await api.getLeaderboards();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveLeaderboardActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };
