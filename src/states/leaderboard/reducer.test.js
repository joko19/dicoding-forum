/* eslint-disable no-undef */
import leaderboardsReducer from './reducer'

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_LEADERBOARD',
      payload: {
        leaderboards: [
          {
            user: {
              id: 'user-5PqX6Ldhnk_ifroq',
              name: 'Dimas Saputra',
              email: 'dimas@dicoding.com',
              avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random'
            },
            score: 55
          },
          {
            user: {
              id: 'user-6oWew2w2Wx5xLUTU',
              name: 'Dicoding',
              email: 'admin@dicoding.com',
              avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random'
            },
            score: 15
          },
          {
            user: {
              id: 'user-QQKfRZM_udt1UE6f',
              name: 'testingg',
              email: 'testing@gmail.com',
              avatar: 'https://ui-avatars.com/api/?name=fiqri&background=random'
            },
            score: 30
          }
        ]
      }
    }

    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.leaderboards)
  })
})
