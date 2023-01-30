import React from 'react'
import { Link } from 'react-router-dom'

function NotFound () {
  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="py-12 text-center">
        <h1 className=" text-4xl font-bold">404 Not Found</h1>
        <Link to="/"> Kembali ke Home</Link>
      </div>
    </div>
  )
}

export default NotFound
