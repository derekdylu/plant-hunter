import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

import logotype from '../../Assets/StartPage/logotype.png'
import pr_m from '../../Assets/StartPage/middle paper.png'
import background from '../../Assets/StartPage/background.jpg'
import logoLeft from '../../Assets/Elements/logo_left.png'
import logoRight from '../../Assets/Elements/logo_right.png'


const StartPage = ({handleNextPage}) => {
  // const [tutorial, setTutorial] = useState(false)

  localStorage.clear()
  localStorage.setItem("plant-hunter", JSON.stringify([]))
  localStorage.setItem("ops", JSON.stringify([]))

  return (
    <div className={classnames(styles.wrapper, 'container w-screen h-screen max-w-none')}>
      <a href="https://www.backstagestudio.com.tw" target="_blank" rel="noreferrer">
        <img src={logoLeft} className={classnames(styles.foundLogoLeft)} alt='logo' />
      </a>
      <a href="https://www.gx-foundation.org" target="_blank" rel="noreferrer">
        <img src={logoRight} className={classnames(styles.foundLogoRight)} alt='logo' />
      </a>
      <div className={classnames(styles.bottomLeft)}></div>
      <div className={classnames(styles.bottomRight)}></div>
      <div className={classnames('flex flex-row justify-center items-center')}>
        <div className={classnames(styles.start, 'text-center text-neutral-900 px-8')}>
          <div className='font-bold text-lg'>
            尋找你的專屬靈魂植物
          </div>
          <div className={classnames('mt-5')} onClick={() => handleNextPage()}>
            <PrimaryButton text='開始探索'/>
          </div>
          <div className='text-xs mt-1'>
            開始探索後您即同意本站之 <Link to="/terms" className='underline'>隱私政策</Link>
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