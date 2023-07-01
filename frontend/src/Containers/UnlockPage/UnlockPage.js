import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import background from '../../Assets/StartPage/background.png'
import logotype from '../../Assets/StartPage/logotype.png'

import poster from '../../Assets/ResultPage/poster.png'
import flower1 from '../../Assets/ResultPage/台灣水玉杯.png'
import flower2 from '../../Assets/ResultPage/桃紅蝴蝶蘭.png'
import flower3 from '../../Assets/ResultPage/台灣喜普鞋蘭.png'
import flower4 from '../../Assets/ResultPage/台灣野牡丹藤.png'

import small1 from '../../Assets/ResultPage/水玉杯.png'
import small2 from '../../Assets/ResultPage/蝴蝶.png'
import small3 from '../../Assets/ResultPage/喜普鞋.png'
import small4 from '../../Assets/ResultPage/牡丹.png'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const flowerList = [flower1, flower2, flower3, flower4]
const smallList = [small1, small2, small3, small4]

const flowerContent = [
  {
    "index": 0,
    "title": "台灣水玉杯",
    "description": "台灣水玉杯 (學名：Thismia taiwanensis)，是種見光死的幽靈花，世界級的嚴重瀕臨絕種腐生植物，完全無葉綠素，因此除了繁殖下一代以外幾乎都待在地表下，哪怕是花果也是被腐葉覆蓋著，大小大概就飯粒這麼大，若不跪在地上仔細翻找幾乎看不見。人類一腳採下就能滅族或是滅種，上山走路要小心點你一個無心或有意的動作可能就輕易毀了好幾萬年演化來的物種！",
    "characteristic": "你是一個把自己真實個性與想法隱藏得很好的人。你善於控制自己的情緒和表達，常常給人一種神秘感，而且更喜歡在自己感到安全和舒適的環境中才打開心扉。",
    "partner": {
      "index": 1,
      "title": "桃紅蝴蝶蘭",
      "description": "他總能讓你感到崇拜。",
    },
  },
  {
    "index": 1,
    "title": "桃紅蝴蝶蘭",
    "description": "桃紅蝴蝶蘭 (學名：Phalaenopsis equestris) 原生於菲律賓和台灣，因產於小蘭嶼而得名。1934 年有學者在小蘭嶼植物標本採集時，發現了極具玩賞價值的桃紅蝴蝶蘭，七零年代台灣種植蘭花風氣盛行，連小蘭嶼這種無人島上的都被採光光，就是紅顏薄命啦！。直到 2009 年，阿改參與屏科大計畫去小蘭嶼做資源調查，上到第四天終於找到了「夢幻物種」蘭嶼桃紅蝴蝶蘭，當時共計記錄到九株，是目前台灣僅餘的植株。為避免野生蘭在台灣消失，相關植物保育單位計劃進行復育工作，希望繁殖更多的小苗，並設法移植回原生地。",
    "characteristic": "你內在外貌都出眾，很受大家喜歡，是人人都愛的萬人迷，也樂於展現自己。人們往往被你的熱情和開朗所吸引。",
    "partner": {
      "index": 0,
      "title": "台灣水玉杯",
      "description": "與他的旅途中，總能讓你感到溫暖。",
    },
  },
  {
    "index": 2,
    "title": "台灣喜普鞋蘭",
    "description": "台灣喜普鞋蘭 (學名：Cypripedium formosanum) 屬於台灣特有種植物 (EN 級)。主要產於中央山脈，南投、花蓮較多，海拔 1500 至 3000 公尺山區的針葉林下，阿改第一次是在書本裡看到照片，真正在野外看到的時候，心想怎麼有這麼漂亮的花，於是受不了就採了！但是因為是長在高海拔的，在平地難以生存，所以採回去也沒種活。因有高度觀賞價值，遭受極大的濫採壓力，棲地喪失與破碎化，現已不容易見到其野外族群，已列入瀕危物種。",
    "characteristic": "你是個很有自己想法的人，不鳴則已，一鳴驚人。你擁有獨立思考和堅定立場的特質。你對於自己的價值觀和信念非常堅持，並且勇於表達自己的意見。",
    "partner": {
      "index": 3,
      "title": "台灣野牡丹藤",
      "description": "你與他無所不聊，他是你的絕佳拍檔！",
    },
  },
  {
    "index": 3,
    "title": "台灣野牡丹藤",
    "description": "台灣野牡丹藤 (學名：Medinilla formosana) 是台灣特有植物，台灣維管束植物紅皮書評估為 VU 等級。 阿改有一次去恆春山上採集，第一次在原生地見到台灣野牡丹藤，爬滿整棵樹上，一整個滿滿的為之震撼，居然這麼美，從此之後因為它愛上了恆春半島。在野外已極罕見的台灣野牡丹藤，竟然在花市、公園常見，以開出一串一串繽紛燦爛淡粉紅色的小花，其一層一層之花果造型，非常吸引人。",
    "characteristic": "你很平易近人、接地氣。個性溫和、友善，也容易相處。你喜歡與他人建立親密的關係，並且樂於傾聽和支持他人。你可喜歡和家人朋友一起度過寧靜的時光，並且擅長在團體中建立和諧的氛圍。",
    "partner": {
      "index": 2,
      "title": "台灣喜普鞋蘭",
      "description": "你總是被他的想法所驚艷！",
    },
  }
]

const UnlockPage = ({result = 0}) => {
  return (
    <div className={classnames('container w-screen')}>
      <div className={classnames('flex flex-col w-screen items-center justify-start px-6')}>
        <div className={classnames('flex flex-row w-full items-start')}>
          <Link to="/" onClick={() => window.location.reload()}>
            <img src={logotype} alt="logo" className={classnames('w-24 mt-4 mb-4')}/>
          </Link>
        </div>

        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 md:mb-16'>
          <div className='flex flex-col items-center justify-center md:items-center md:justify-center'>
            <img src={flowerList[result]} alt="flower" className={classnames(styles.flower, 'w-4/5 sm:w-3/5 md:w-full')} />
          </div>

          <div className={classnames('flex flex-col w-full items-start md:justify-center mt-5 mb-16 md:my-0 xl:pr-32')}>
            <div className={classnames(styles.title, 'font-bold mt-4 p-2 mb-1')}>
              你的物種特性
            </div>
            <div className={classnames(styles.description, 'mt-2 text-white')}>
              {flowerContent[result].characteristic}
            </div>

            <div className={classnames(styles.title, 'font-bold mt-4 p-2 mb-1')}>
              最佳冒險拍檔
            </div>
            <div className="flex flex-row gap-2 mt-2">
              <img src={smallList[flowerContent[result].partner.index]} alt="flower_small" className={classnames('w-1/2 mt-0')} />
              <div className="flex flex-col w-full">
                <div className={classnames(styles.description, 'font-bold mt-2 text-white')}>
                  {flowerContent[result].partner.title}
                </div>
                <div className={classnames(styles.description, 'mt-2 text-white')}>
                  {flowerContent[result].partner.description}
                </div>
              </div>
            </div>

            <div className={classnames(styles.title, 'font-bold mt-4 p-2 mb-1')}>
              關於{flowerContent[result].title}
            </div>
            <div className={classnames(styles.description, 'mt-2 text-white')}>
              {flowerContent[result].description}
            </div>
          </div>
        </div>

        <Link to={"/" + result + ".png"} target="_blank">
          <PrimaryButton text='下載結果' variant='secondary'/>
        </Link>
      </div>

      <div className={classnames(styles.promotion, 'flex flex-col w-screen items-center justify-start px-6 pb-16')}>
        <div className="mt-64 mb-4 max-w-md">
          做完測驗後，想更了解「植物獵人」這個職業嗎？歡迎點擊以下的影片連結，讓我們用20分鐘跟你說個關於「植物獵人—洪信介」的故事。
        </div>

        <div>
          <PrimaryButton text='觀看影片'/>
        </div>

        <div className='flex flex-col md:flex-row md:gap-8 md:mb-32'>
          <img src={poster} alt="poster" className='mt-16'/>

          <div className='flex flex-col items-center md:justify-center'>
            <div className={classnames('flex flex-col w-full items-start mt-5 mb-16 max-w-md')}>
              <div className={classnames(styles.title2, 'font-bold text-lg text-primary-200 mt-4 p-2 mb-1')}>
                作品介紹
              </div>
              <div className={classnames(styles.description, 'mt-2')}>
                洪信介（阿改老師），是個高中肄業卻能靠肉眼辨認上千種台灣植物的植物獵人，帶著他用原子筆手繪的植物圖受邀參與世界三大藝術展覽——卡賽爾文件展。《花開富貴》記錄了這位想要「名利雙收」的植物獵人，如何在森林裡找到自己的一片天，更為台灣的植物保育盡一份心。
              </div>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
              <div>
                <PrimaryButton text='臉書粉專'/>
              </div>
              <div>
                <PrimaryButton text='IG主頁'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames(styles.cardbaord)}></div>
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default UnlockPage