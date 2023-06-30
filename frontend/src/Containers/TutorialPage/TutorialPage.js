import React from 'react'
import classnames from 'classnames'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'

import styles from './styles.module.scss'

import background from '../../Assets/StartPage/middle paper.png'
import tutorial from '../../Assets/TutorialPage/tutorial.png'


const TutorialPage = ({handleNextPage}) => {
  return (
    <div className={classnames(styles.wrapper, 'container w-screen h-screen max-w-none')}>
      <div className={classnames(styles.bottomCurtain)}></div>

      <div className={classnames('absolute flex flex-col w-full h-full items-center justify-center px-6 z-10')}>
        <img src={tutorial} alt="tutorial" />
        <div className={classnames('mt-2 mb-6')}>
          半夜時分，你接到一通未顯示來電。電話那頭請你接下一個神秘計畫。你是一名嚮往名利雙收的植物獵人，擅長在森林裡尋找瀕危的植物。現在，你準備重裝出發。
        </div>
        <div className={classnames(styles.button)} onClick={() => handleNextPage()}>
          <PrimaryButton text='準備出發' variant='contained'/>
        </div>
      </div>

      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default TutorialPage