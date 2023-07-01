import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import logotype from '../Assets/StartPage/logotype.png'

const content = [
  "使用條款1",
  "使用條款2",
  "使用條款3",
  "使用條款4",
  "使用條款5",
]

const Terms = () => {
  return (
    <div className='container mx-auto pt-8 px-8'>
      <div className={classnames('flex flex-row w-full items-center justify-center')}>
        <Link to="/">
          <img src={logotype} alt="logo" className={classnames('w-64 mt-4 mb-4')}/>
        </Link>
      </div>
      <Link to="/" className='underline'>
        返回
      </Link>
      <div className='font-bold text-xl mt-4'>
        使用條款
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        {content.map((item, index) => (
          <div className='flex flex-row'>
            <div className='font-bold'>
              {index+1}.
            </div>
            <div key={index} className=''>
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Terms