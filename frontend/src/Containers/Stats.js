import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import logotype from '../Assets/StartPage/logotype.png'

const Stats = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <div className={classnames('flex flex-row w-full items-center justify-center')}>
        <Link to="/">
          <img src={logotype} alt="logo" className={classnames('w-28 mt-4 mb-4')}/>
        </Link>
      </div>
      {
        show &&
        <div className='flex flex-col items-center justify-center my-2 mx-4 gap-2'>
          <div className='text-center'>
            請先<Link to="https://login.retool.com/" target='_blank'><span className='text-blue-800 font-bold mx-1 hover:underline'>於此</span></Link>透過點選 Google 帳號登入管理者帳號，再返回重新整理此頁面。<span className='text-neutral-500 mx-1 hover:underline' onClick={() => setShow(false)}>隱藏</span>
          </div>
        </div>
      }
      <iframe title="stats" src="https://gxplanthunter.retool.com/apps/%E8%8A%B1%E9%96%8B%E5%AF%8C%E8%B2%B4%E7%B7%9A%E4%B8%8A%E6%B8%AC%E9%A9%97%20%E7%B5%B1%E8%A8%88%E8%B3%87%E6%96%99" width="100%" height="800px"></iframe>
    </div>
  )
}

export default Stats