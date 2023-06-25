import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

import book from '../../Assets/StartPage/book.png'
import cb_mr from '../../Assets/StartPage/cardboard - middle right.png'
import cb_ul from '../../Assets/StartPage/cardboard - upper left.png'
import logotype from '../../Assets/StartPage/logotype.png'
import mt_bl from '../../Assets/StartPage/mountain - bottom left.png'
import mt_mr from '../../Assets/StartPage/mountain - middle right - dark ver.png'
import np from '../../Assets/StartPage/note paper - bottom.png'
import pr_bl from '../../Assets/StartPage/Paper Rip - bottom left.png'
import pr_br from '../../Assets/StartPage/Paper Rip - bottom right.png'
import pr_m from '../../Assets/StartPage/Paper Rip - middle.png'
import pr_ur from '../../Assets/StartPage/Paper Rip - upper right.png'
import shovel from '../../Assets/StartPage/shovel - upper.png'
import 台灣喜普鞋蘭 from '../../Assets/StartPage/台灣喜普鞋蘭.png'
import 台灣野牡丹藤 from '../../Assets/StartPage/台灣野牡丹藤.png'
import 桃紅蝴蝶蘭  from '../../Assets/StartPage/桃紅蝴蝶蘭.png'
import background from '../../Assets/StartPage/background.png'

const StartPage = () => {
  return (
    <div className='container w-screen h-screen'>
      <img src={shovel} className={classnames(styles.shovel)} alt='shovel' />
      <img src={pr_ur} className={classnames(styles.pr_ur)} alt='pr_ur' />
      <img src={台灣野牡丹藤} className={classnames(styles.台灣野牡丹藤)} alt='台灣野牡丹藤' />
      <img src={cb_ul} className={classnames(styles.cb_ul)} alt='cb_ul' />
      <img src={桃紅蝴蝶蘭} className={classnames(styles.桃紅蝴蝶蘭)} alt='桃紅蝴蝶蘭' />
      <img src={pr_br} className={classnames(styles.pr_br)} alt='pr_br' />
      <img src={mt_bl} className={classnames(styles.mt_bl)} alt='mt_bl' />
      <img src={book} className={classnames(styles.book)} alt='book' />
      <img src={np} className={classnames(styles.np)} alt='np' />
      <img src={台灣喜普鞋蘭} className={classnames(styles.台灣喜普鞋蘭)} alt='台灣喜普鞋蘭' />
      <img src={pr_bl} className={classnames(styles.pr_bl)} alt='pr_bl' />
      <img src={pr_m} className={classnames(styles.pr_m)} alt='pr_m' />
      <img src={cb_mr} className={classnames(styles.cb_mr)} alt='cb_mr' />
      <img src={mt_mr} className={classnames(styles.mt_mr)} alt='mt_mr' />
      <img src={logotype} className={classnames(styles.logotype)} alt='logotype'/>
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default StartPage