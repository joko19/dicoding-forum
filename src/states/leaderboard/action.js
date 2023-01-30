const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARD'
}

function receiveLeaderboardActionCreator (leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards
    }
  }
}

export { ActionType, receiveLeaderboardActionCreator }
