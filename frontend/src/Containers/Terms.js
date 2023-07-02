import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import logotype from '../Assets/StartPage/logotype.png'

const content = [
  "那麼，Google 的廣告放送機制是如何運作的呢？我們向跨國或在地的大大小小企業販售廣告空間，藉此賺取收益；主要的廣告放送方式有兩種。第一種是讓企業在 Google 各項產品 (例如 Google 搜尋、Google 地圖和 YouTube) 中刊登廣告，以觸及潛在客戶。",
  "第二種是讓企業購買 Google 在合作夥伴網站和應用程式 (例如新聞刊物和網誌) 中顯示的廣告空間。在這種情況下，大部分的收益歸合作夥伴所有，可做為其內容的資金來源。因此，廣告不僅能資助 Google 的營運，也能幫助許多其他網站和創作者。基本上，我們大部分的收入是藉由在 Google.com 的搜尋結果旁放送相關廣告而得來的。想瞭解進一步資訊，歡迎前往這個網頁查看我們如何透過廣告賺取收益。",
  "我們會使用你的個人資訊，讓 Google 產品更貼近你的需求。比方說，我們可為你自動顯示查詢建議、透過 Google 地圖提供更快的回家路線，或是根據你感興趣的內容放送更實用的廣告。不過，我們絕不會向任何人販售你的個人資訊，而且你在未登入或未儲存任何個人資訊的情況下，也能使用 Google 許多產品。",
  "隱私權需求各異，單一設定勢必無法滿足所有人。因此，我們在 Google 帳戶和我們的產品中直接設置了強大又簡單好用的隱私權管理選項，方便你選擇合適的隱私權設定。",
  "因為有廣告，我們才能為世界各地的使用者免費提供我們的產品，協助大家找到答案以及完成各種大小事。不過，當你選擇使用 Google 產品，也意味著你信任 Google 會妥善處理你的個人資訊。因此，我們絕不會販售你的個人資訊，並且為你提供了強大的隱私權管理選項。Google 打造的產品可供全世界所有人使用，所以我們有責任維護使用者隱私權。",
]

const Terms = () => {
  return (
    <div className={classnames(styles.background, 'h-screen')}>
      <div className='container mx-auto px-8 h-full pb-16'>
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
    </div>
  )
}

export default Terms