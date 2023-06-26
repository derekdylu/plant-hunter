import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

import logotype from '../../Assets/StartPage/logotype.png'
import pr_m from '../../Assets/StartPage/middle paper.png'
import background from '../../Assets/StartPage/background.png'

const StartPage = ({handleNextPage}) => {
  return (
    <div className={classnames(styles.wrapper, 'container w-screen h-screen max-w-none')}>
      <div className={classnames(styles.bottomLeft)}>.</div>
      <div className={classnames(styles.bottomRight)}>.</div>
      <div className={classnames('flex flex-row justify-center items-center')}>
        <div className={classnames(styles.startButton)} onClick={() => handleNextPage()}>
          <PrimaryButton text='開始探索' variant='contained'/>
        </div>
        <img src={pr_m} className={classnames(styles.pr_m)} alt='pr_m' />
        <img src={logotype} className={classnames(styles.logotype)} alt='logotype'/>
      </div>
      <div className={classnames(styles.middleRight)}>.</div>
      <div className={classnames(styles.topRight)}>.</div>
      <div className={classnames(styles.topLeft)}>.</div>
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default StartPage