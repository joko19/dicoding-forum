import React, { useEffect, useState } from 'react'
import { BiCommentDetail, BiDownvote, BiUpvote } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/threadDetail/action'
import { FiSend } from 'react-icons/fi'

function DetailThread () {
  const { id } = useParams()
  const { threadDetail } = useSelector((states) => states)
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (!threadDetail) {
    return (
      <div className="dark:bg-gray-700 dark:text-white min-h-screen">
        <div className="py-12 text-center">
          <h1 className=" text-4xl font-bold">Catatan Tidak ditemukan</h1>
          <Link to="/"> Kembali ke Home</Link>
        </div>
      </div>
    )
  }

  const submitComment = () => {
    dispatch(asyncAddComment({ id, content }))
    dispatch(asyncReceiveThreadDetail(id))
    setContent('')
  }

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto pt-4">
        <div className="flex gap-2 my-2 items-center">
          <img
            src={threadDetail.owner.avatar}
            alt={threadDetail.owner.name}
            className="rounded-full"
          />
          <div>
            <div className="text-lg">{threadDetail.owner.name}</div>
            <div className="text-gray-500 dark:text-gray-300 text-sm">
              {new Date(threadDetail?.createdAt).toDateString()}
            </div>
          </div>
        </div>
        <div className="font-bold text-lg">{threadDetail.title}</div>
        <p className="py-2 text-lg">{threadDetail.body}</p>
        <div className="flex gap-2 pb-2 mb-2">
          <div className="flex items-center border rounded-full p-2 gap-1">
            <BiUpvote /> {threadDetail.upVotesBy.length}
          </div>
          <div className="flex items-center border rounded-full p-2 gap-1">
            <BiDownvote /> {threadDetail.downVotesBy.length}
          </div>
          <div className="flex items-center border rounded-full p-2 gap-1">
            <BiCommentDetail /> {threadDetail.comments.length}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Tulis Komentar"
            className="border p-2 rounded focus:outline-none w-full dark:bg-gray-600 dark:text-white"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submitComment()}
          />
          <FiSend
            size={24}
            className="cursot-pointer"
            onClick={submitComment}
          />
        </div>
        {threadDetail.comments.map((item, index) => (
          <div key={index}>
            <div className="flex gap-2 my-2 items-start">
              <img
                src={item.owner.avatar}
                alt={item.owner.name}
                className="rounded-full w-12"
              />
              <div>
                <div>
                  <div className="text-lg">{item.owner.name}</div>
                  <div className="text-gray-500 dark:text-gray-300 text-sm">{item.content}</div>
                </div>
                <div className="flex gap-2 pb-2 mb-2">
                  <div className="flex items-center rounded-full gap-1">
                    <BiUpvote /> {item.upVotesBy.length}
                  </div>
                  <div className="flex items-center  rounded-full gap-1">
                    <BiDownvote /> {item.downVotesBy.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailThread
