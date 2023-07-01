import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import logotype from '../Assets/StartPage/logotype.png'

const Stats = () => {
  return (
    <div>
      <div className={classnames('flex flex-row w-full items-center justify-center')}>
        <Link to="/">
          <img src={logotype} alt="logo" className={classnames('w-28 mt-4 mb-4')}/>
        </Link>
      </div>
      <iframe title="stats" src="https://gxplanthunter.retool.com/apps/%E8%8A%B1%E9%96%8B%E5%AF%8C%E8%B2%B4%E7%B7%9A%E4%B8%8A%E6%B8%AC%E9%A9%97%20%E7%B5%B1%E8%A8%88%E8%B3%87%E6%96%99" width="100%" height="800px"></iframe>
    </div>
  )
}

export default Stats