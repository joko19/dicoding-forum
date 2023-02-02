import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../components/Header'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'

function Leaderboards () {
  const { leaderboards = [] } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads({ isLoading: true }))
  }, [dispatch])

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Header />
        <section className="max-w-5xl mt-8 mx-auto flex-wrap">
          {leaderboards?.map((item, index) => (
            <div key={index} className="flex gap-4 items-center mt-4 cursor-pointer">
              <img
                src={item.user.avatar}
                alt={item.user.name}
                className="rounded-full"
              />
              <div>
                <div className="font-bold">{item.user.name}</div>
                <div className="text-xs">{item.user.email}</div>
                <div className="text-gray-500 text-sm">{item.score} Points</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Leaderboards
