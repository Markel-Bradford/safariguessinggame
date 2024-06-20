import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useRouteError, Link, useNavigate } from 'react-router-dom'
import "./Error.css"

const Error = () => {
  const error = useRouteError();
  const goBack = useNavigate()

  return (
    <div className='error'>
      <h1 className='errorMsg'>Whoops! We ran into a problem!</h1>
      <div className='errorBtnContainer'>
        <button className='btn--err' id='backBtn' onClick={() => goBack(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className='btn--err'>
          <HomeIcon width={20}/>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Error
