import { ActionType } from './action';
 
function leaderboardsReducer(Leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return Leaderboards;
  }
}
 
export default leaderboardsReducer;