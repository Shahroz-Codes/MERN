import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div
    className='text-5xl text-amber-300 p-4 bg-amber-900 text-center'
    >User: {userid}</div>
  )
}

export default User