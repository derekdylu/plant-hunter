import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

import logotype from '../../Assets/StartPage/logotype.png'
import pr_m from '../../Assets/StartPage/middle paper.png'
import background from '../../Assets/StartPage/background.png'

const StartPage = ({handleNextPage}) => {
  // const [tutorial, setTutorial] = useState(false)

  localStorage.clear()
  localStorage.setItem("plant-hunter", JSON.stringify([]))
  localStorage.setItem("ops", JSON.stringify([]))

  return (
    <div className={classnames(styles.wrapper, 'container w-screen h-screen max-w-none')}>
      <div className={classnames(styles.bottomLeft)}></div>
      <div className={classnames(styles.bottomRight)}></div>
      <div className={classnames('flex flex-row justify-center items-center')}>
        <div className={classnames(styles.button)} onClick={() => handleNextPage()}>
          <PrimaryButton text='開始探索'/>
        </div>
        <div className={classnames(styles.terms, 'text-center text-neutral-900 px-8')}>
          <div>
            長出自己的樣子，每個人都是稀有物種。
          </div>
          <div>
            你的靈魂植物是什麼？
          </div>
          <div className='text-sm mt-1'>
            開始探索後您即同意本站之<Link to="/terms" className='underline'>使用條款</Link>
          </div>
        </div>
        <img src={pr_m} className={classnames(styles.pr_m)} alt='pr_m' />
        <img src={logotype} className={classnames(styles.logotype)} alt='logotype' />
      </div>
      <div className={classnames(styles.middleRight)}></div>
      <div className={classnames(styles.topRight)}></div>
      <div className={classnames(styles.topLeft)}></div>
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default StartPage