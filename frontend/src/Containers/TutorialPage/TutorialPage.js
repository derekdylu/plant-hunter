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

      <div className={classnames('absolute flex flex-col w-full h-full items-center justify-center px-6 z-10 ')}>
        <img src={tutorial} alt="tutorial" className={classnames(styles.image, 'h-2/5')} />
        <div className={classnames(styles.caption, 'mt-2 mb-6 text-base font-medium max-w-xl md:text-lg text-center')}>
          <div>
            半夜時分，你接到一通未顯示來電。電話那頭請你接下一個神秘計畫。你是一名嚮往名利雙收的植物獵人，擅長在森林裡尋找瀕危的植物。
          </div>
          <div>
            現在，你準備重裝出發。
          </div>
        </div>
        <div className={classnames(styles.button)} onClick={() => handleNextPage()}>
          <PrimaryButton text='準備出發'/>
        </div>
        <div className='text-xs mt-1 text-neutral-900'>
          根據植物獵人親身經歷改編
        </div>
      </div>

      <img src={background} className={classnames(styles.backCurtain)} alt='background' />
    </div>
  )
}

export default TutorialPage