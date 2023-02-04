/* eslint-disable no-undef */
import threadsReducer from './reducer'

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-08_nUU2fhu1P5nre',
            title: 'Pengalaman Belajar React di Dicoding',
            body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
            category: 'react',
            createdAt: '2022-11-13T09:59:31.019Z',
            ownerId: 'user-5PqX6Ldhnk_ifroq',
            totalComments: 2,
            upVotesBy: [
              'user-6oWew2w2Wx5xLUTU',
              'user-5PqX6Ldhnk_ifroq',
              'user-QQKfRZM_udt1UE6f'
            ],
            downVotesBy: []
          },
          {
            id: 'thread-B3N9KGa87vfMHyBQ',
            title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
            body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
            category: 'introduction',
            createdAt: '2022-11-13T09:55:55.353Z',
            ownerId: 'user-6oWew2w2Wx5xLUTU',
            totalComments: 3,
            upVotesBy: [
              'user-5PqX6Ldhnk_ifroq',
              'user-6oWew2w2Wx5xLUTU',
              'user-QQKfRZM_udt1UE6f'
            ],
            downVotesBy: []
          }
        ]
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.threads)
  })

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-08_nUU2fhu1P5nre',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 2,
        upVotesBy: [
          'user-6oWew2w2Wx5xLUTU',
          'user-5PqX6Ldhnk_ifroq',
          'user-QQKfRZM_udt1UE6f'
        ],
        downVotesBy: []
      }
    ]

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-EB_uzBR1NGJwBgKr',
          title: 'thread baru',
          body: 'lorem ipsum',
          ownerId: 'user-yn50zmnqfNMbzbbF',
          category: 'testing',
          createdAt: '2023-02-04T17:46:13.427Z',
          totalComments: 0,
          upVotesBy: [],
          downVotesBy: []
        }
      }
    }

    // action
    const nextState = threadsReducer(initialState, action)
    console.log(nextState)
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState])
  })

  it('should return the threads with the vote thread when given by TOGGLE_UPVOTE_THREAD or TOGGLE_DOWNVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-08_nUU2fhu1P5nre',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 2,
        upVotesBy: [
          'user-6oWew2w2Wx5xLUTU',
          'user-QQKfRZM_udt1UE6f'
        ],
        downVotesBy: []
      }
    ]

    const action = {
      type: 'TOGGLE_UPVOTE_THREAD',
      payload: {
        threadId: 'thread-08_nUU2fhu1P5nre',
        userId: 'user-5PqX6Ldhnk_ifroq'
      }
    }

    // action: upvote thread
    const nextState = threadsReducer(initialState, action)
    console.log(nextState)
    // assert
    expect(nextState).toEqual([{ ...initialState[0], upVotesBy: [...new Set([...initialState[0].upVotesBy, action.payload.userId])], downVotesBy: [initialState[0].downVotesBy.filter(item => item !== action.payload.userId)] }])

    const action2 = {
      type: 'TOGGLE_DOWNVOTE_THREAD',
      payload: {
        threadId: 'thread-08_nUU2fhu1P5nre',
        userId: 'user-5PqX6Ldhnk_ifroq'
      }
    }
    // action: downvote thread
    const nextState2 = threadsReducer(initialState, action2)

    // assert
    expect(nextState2).toEqual([{ ...initialState[0], upVotesBy: [initialState[0].upVotesBy.filter(item => item !== action2.payload.userId)], downVotesBy: [...new Set([...initialState[0].downVotesBy, action2.payload.userId])] }])
  })
})
