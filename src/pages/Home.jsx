import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiUpvote, BiDownvote, BiCommentDetail } from 'react-icons/bi'
import { Header } from '../components/Header'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import {
  asyncDownVoteThread,
  asyncUpVoteThread
} from '../states/thread/action'

function Home () {
  const { threads = [], authUser, users } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads({ isLoading: true }))
  }, [dispatch])

  const handleUpvote = (threadId) => {
    dispatch(asyncUpVoteThread({ threadId, userId: authUser.id }))
  }

  const handleDownvote = (threadId) => {
    dispatch(asyncDownVoteThread({ threadId, userId: authUser.id }))
  }

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Header />
        <section className="max-w-5xl mt-8 mx-auto flex-wrap">
          {threads?.map((item, index) => {
            const ownerThread = users.find((user) => user.id === item.ownerId)
            return (
              <div key={index}>
                <Link
                  to={`/${item?.id}`}
                  className="p-2 rounded my-8"
                >
                  <div className="flex gap-2 items-center mb-2">
                    <img
                      src={ownerThread.avatar}
                      alt={ownerThread.name}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{ownerThread.name}</h3>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {new Date(item?.createdAt).toDateString()}
                      </div>
                    </div>
                  </div>
                  <h1 className="text-xl text-blue-500 dark:text-blue-400 font-medium">
                    {item?.title}
                  </h1>
                  <div className="text-gray-500 dark:text-gray-300 line-clamp-3" dangerouslySetInnerHTML={{ __html: item?.body }}/>
                  {item?.category && (
                    <div className="text-xs bg-green-200 text-green-700 my-2 inline-flex rounded-full py-1 px-3">
                      {item.category}
                    </div>
                  )}
                </Link>
                <div className="flex gap-2">
                  <div
                    onClick={() => handleUpvote(item.id)}
                    className={`flex items-center border rounded-full p-2 gap-1 cursor-pointer ${
                      item?.upVotesBy?.includes(authUser.id) &&
                        'bg-green-500 text-white'
                    }`}
                  >
                    <BiUpvote /> {item?.upVotesBy?.length}
                  </div>
                  <div
                    onClick={() => handleDownvote(item.id)}
                    className={`flex items-center border rounded-full p-2 gap-1 cursor-pointer ${
                      item?.downVotesBy?.includes(authUser.id) &&
                        'bg-red-500 text-white'
                    }`}
                  >
                    <BiDownvote /> {item?.downVotesBy?.length}
                  </div>
                  <div className="flex items-center border rounded-full p-2 gap-1">
                    <BiCommentDetail /> {item?.totalComments}
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default Home
