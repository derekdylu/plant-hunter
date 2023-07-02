import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './StartPage/styles.module.scss'

import logotype from '../Assets/StartPage/logotype.png'
import background from '../Assets/StartPage/background_terms.png'

const content = [
  "使用條款1",
  "使用條款2",
  "使用條款3",
  "使用條款4",
  "使用條款5",
]

const Terms = () => {
  return (
    <div>
      <div className='container mx-auto px-8'>
        <div className={classnames('flex flex-row items-center justify-center')}>
          <Link to="/">
            <img src={logotype} alt="logo" className={classnames('w-36 mt-4 mb-8')} style={{ zIndex: "-2"}} />
          </Link>
        </div>
        <div className={classnames('flex flex-col items-start justify-center mx-4 md:px-32 text-white')}>
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
      </div>
      <img src={background} alt="background" className={classnames(styles.background)} style={{ top: "0", left: "0", zIndex: "-3" }}/>
    </div>
  )
}

export default Terms