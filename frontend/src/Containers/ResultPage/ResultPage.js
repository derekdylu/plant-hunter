import React, { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../Hooks/useWindowDimensions'

import styles from './styles.module.scss'

import background from '../../Assets/StartPage/background.jpg'
import logotype from '../../Assets/StartPage/logotype.png'
import logoLeft from '../../Assets/Elements/logo_tr_left.png'
import logoRight from '../../Assets/Elements/logo_tr_right.png'
import carousel from '../../Assets/ResultPage/carousel.gif'

// import flower1 from '../../Assets/ResultPage/台灣水玉杯.png'
// import flower2 from '../../Assets/ResultPage/桃紅蝴蝶蘭.png'
// import flower3 from '../../Assets/ResultPage/台灣喜普鞋蘭.png'
// import flower4 from '../../Assets/ResultPage/台灣野牡丹藤.png'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const DELAY = 15  // seconds
const MAXWIDTH = 680
// const MD = 768

// const flowerList = [flower1, flower2, flower3, flower4]

// const flowerContent = [
//   {
//     "index": 0,
//     "title": "台灣水玉杯",
//     "description": "台灣水玉杯 (Thismia taiwanensis)，是種見光死的幽靈花，世界級的",
//     "descriptionMore": "嚴重瀕臨絕種腐生植物，完全無葉綠素，因此除了繁殖下一代以外幾乎都待在地表下，哪怕是花果也是被腐葉覆蓋著，大小大概就咖啡豆這麼大，若不跪在地上仔細翻找幾乎看不見。人類一腳採下就能滅族或是滅種，上山走路要小心點！你一個無心或有意的動作可能就輕易毀了好幾萬年演化來的物種！",
//     "characteristic": "你是一個把自己真實個性與想法隱藏得很好的人。你善於控制自己的情緒和表達，常常給人一種神秘感，而且更喜歡在自己感到安全和舒適的環境中才打開心扉。",
//     "partner": {
//       "title": "台灣野牡丹藤",
//       "description": "與他的旅途中，總能讓你感到溫暖。",
//     },
//   },
//   {
//     "index": 1,
//     "title": "桃紅蝴蝶蘭",
//     "description": "桃紅蝴蝶蘭 (Phalaenopsis equestris) 原生於菲律賓和台灣，因產於",
//     "descriptionMore": "小蘭嶼而得名。1934 年有學者在小蘭嶼植物標本採集時，發現了極具玩賞價值的桃紅蝴蝶蘭，七零年代台灣種植蘭花風氣盛行，連小蘭嶼這種無人島上的都被採光光，就是紅顏薄命啦！直到 2009 年，阿改參與屏科大計畫去小蘭嶼做資源調查，上島第四天終於找到了「夢幻物種」蘭嶼桃紅蝴蝶蘭，當時共計記錄到九株，是目前台灣僅餘的植株。為避免野生蘭在台灣消失，相關植物保育單位計劃進行復育工作，希望繁殖更多的小苗，並設法移植回原生地。",
//     "characteristic": "你內在外貌都出眾，很受大家喜歡，是人人都愛的萬人迷，也樂於展現自己。人們往往被你的熱情和開朗所吸引。",
//     "partner": {
//       "title": "台灣喜普鞋蘭",
//       "description": "你總是被他的想法所驚艷！",
//     },
//   },
//   {
//     "index": 2,
//     "title": "台灣喜普鞋蘭",
//     "description": "台灣喜普鞋蘭 (Cypripedium formosanum) 屬於台灣特有種植物 (EN 級)。主要產於",
//     "descriptionMore": "中央山脈，南投、花蓮較多，海拔 1500 至 3000 公尺山區的針葉林下，阿改第一次是在書本裡看到照片，真正在野外看到的時候，心想怎麼有這麼漂亮的花，於是受不了就採了！但是因為是長在高海拔的，在平地難以生存，所以採回去也沒種活。因有高度觀賞價值，遭受極大的濫採壓力，棲地喪失與破碎化，現已不容易見到其野外族群，已列入瀕危物種。",
//     "characteristic": "你是個很有自己想法的人，不鳴則已，一鳴驚人。你擁有獨立思考和堅定立場的特質。你對於自己的價值觀和信念非常堅持，並且勇於表達自己的意見。",
//     "partner": {
//       "title": "桃紅蝴蝶蘭",
//       "description": "與他的旅途總是歡快。",
//     },
//   },
//   {
//     "index": 3,
//     "title": "台灣野牡丹藤",
//     "description": "台灣野牡丹藤 (Medinilla formosana) 是台灣特有植物，台灣維管束植物紅皮書評估",
//     "descriptionMore": "為 VU 等級。 阿改有一次去恆春山上採集，第一次在原生地見到台灣野牡丹藤，爬滿整棵樹上，一整個滿滿的為之震撼，居然這麼美，從此之後因為它愛上了恆春半島。在野外已極罕見的台灣野牡丹藤，竟然在花市、公園常見，以開出一串一串繽紛燦爛淡粉紅色的小花，其一層一層之花果造型，非常吸引人。",
//     "characteristic": "你很平易近人、接地氣。個性溫和、友善，也容易相處。你喜歡與他人建立親密的關係，並且樂於傾聽和支持他人。你可喜歡和家人朋友一起度過寧靜的時光，並且擅長在團體中建立和諧的氛圍。",
//     "partner": {
//       "title": "台灣水玉杯",
//       "description": "深度的交流是舒服的旅行方式。",
//     },
//   }
// ]

const default_orderAdjustmentList = [2,0,1,3]

const ResultPage = ({resultList, orderAdjustmentList = default_orderAdjustmentList, handleNextPage}) => {
  // const [result, setResult] = useState(-1)
  const selected = JSON.parse(localStorage.getItem('plant-hunter'))
  const [disable, setDisable] = useState(true)
  const [waiting, setWaiting] = useState(false)
  const { width } = useWindowDimensions()
  const [remainTxt, setRemainTxt] = useState(DELAY)
  const unlock = useRef(null)
  const [dev] = useState(false)
  // const [readMore, setReadMore] = useState(false)
  const [glow, setGlow] = useState(false)

  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const wait = async () => {
    let remain = DELAY
    setWaiting(true)
    while (remain > 0) {
      await delay(1000)
      remain -= 1
      setRemainTxt(remain)
    }
    setDisable(false)
    setWaiting(false)
  }

  const handleScroll = async() => {
    unlock.current.scrollIntoView({behavior: 'smooth'})
    handleGlow()
  }

  const handleGlow = async() => {
    setGlow(true)
    await delay(1000)
    setGlow(false)
  }

  const calculate = () => {
    let resList = []
    for (let i = 0; i < resultList.length; i++) {
      const res = {
        "index": i,
        "score": selected.filter(s => s === i).length
      }
      resList = resList.concat(res)
    }

    resList.sort((a, b) => b.score - a.score || orderAdjustmentList.indexOf(a.index) - orderAdjustmentList.indexOf(b.index))
    // setResult(resList[0].index)
    postResult(resList[0].index)
    localStorage.setItem("result", JSON.stringify(resList[0].index))
  }

  const postResult = async (val) => {
    const response = await fetch('/.netlify/functions/post_result', {
      method: 'POST',
      body: JSON.stringify({
        "timestamp": new Date().toISOString(),
        "selection": JSON.parse(localStorage.getItem('ops')),
        "result": val
      })
    })
    const data = await response.json()
    dev && console.log(data)
  }

  useEffect(() => {
    calculate()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classnames('container mx-auto')}>
      <div className={classnames('flex flex-col w-full items-center justify-start px-6 pb-40')}>
        <div className={classnames('flex flex-row w-full items-center justify-between')}>
          <Link to="/" onClick={() => window.location.reload()}>
            <img src={logotype} alt="logo" className={classnames('w-24 md:w-36 mt-4 mb-4 md:mb-0')}/>
          </Link>
          <div className='flex flex-row w-fit gap-0 items-center justify-end'>
            <a href="https://www.backstagestudio.com.tw" target="_blank" rel="noreferrer">
              <img src={logoLeft} alt="logo" className='h-8 md:h-16' />
            </a>
            <a href="https://www.gx-foundation.org" target="_blank" rel="noreferrer">
              <img src={logoRight} alt="logo" className='h-8 md:h-16' />
            </a>
          </div>
        </div>

        {/* <div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 md:mb-0 md:mt-4'>
          <div className='flex flex-col items-center justify-center md:items-center md:justify-start'>
            { 
              result === -1 ?
              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 my-12 animate-spin fill-primary-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
              </div>
              :
              <img src={flowerList[result]} alt="flower" className={classnames(styles.flower, 'w-4/5 sm:w-3/5 md:w-auto md:h-4/5')} />
            }
          </div>

          <div className={classnames('flex flex-col w-full items-start md:justify-start mt-5 md:mt-0')}>
            {
              result !== -1 &&
              <div className={classnames(styles.title, 'font-bold p-2 mb-1')}>
                關於{flowerContent[result].title}
              </div>
            }
            {
              result !== -1 &&
              <div className={classnames(styles.description, 'mt-2 text-white')}>
                <span>
                  {flowerContent[result].description}
                </span>
                {
                  readMore ?
                  <span>
                    <span>
                      {flowerContent[result].descriptionMore}
                    </span>
                    <span className='ml-1 text-primary-200' onClick={() => setReadMore(false)} style={{ cursor: "pointer" }}>
                      收合
                    </span>
                  </span>
                  :
                  <span>
                    <span>
                      ...
                    </span>
                    <span className='text-primary-200' onClick={() => setReadMore(true)} style={{ cursor: "pointer" }}>
                      閱讀更多
                    </span>
                  </span>
                }
              </div>
            }

            <div className={classnames(styles.title, 'font-bold p-2 mt-6 mb-1')}>
              你的最佳冒險拍檔
            </div>
            <div className={classnames(styles.locker, 'flex flex-row w-full items-center justify-between rounded-lg pb-4 pt-4 px-6 mb-12 mt-2')}>
              
              <div className={classnames('flex flex-col items-start justify-center pt-2')}>
                <div className='text-primary-900 font-bold text-sm lg:text-lg'>
                  想知道誰是你的最佳冒險拍檔？
                </div>
                <div className='text-primary-900 font-bold text-sm lg:text-lg'>
                  觀看《花開富貴》預告解鎖！
                </div>
                <div className='w-fit bg-primary-50 text-primary-800 font-bold py-2 px-6 hover:bg-primary-900 hover:text-primary-100 active:bg-primary-900 active:text-primary-100 rounded-full mt-4' onClick={() => handleScroll()} style={{ cursor: "pointer" }} >
                  看預告解鎖
                </div>
              </div>

              <img src={carousel} alt="carousel" className='w-1/3 h-auto lg:h-full lg:w-auto' />
              
            </div>
          </div>
        </div> */}

        <img src={carousel} alt="carousel" className={classnames(styles.carousel, 'w-[160px] sm:w-[240px] h-auto')}/>

        <div className={classnames(styles.locker, 'flex flex-col w-fit items-center justify-between rounded-lg pb-4 pt-12 sm:pt-24 px-6 mb-12 mt-28 sm:mt-36')} style={width > MAXWIDTH ? { width: MAXWIDTH + "px" } : { width: "80vw" }}>

          <div className={classnames('flex flex-col items-start justify-center pt-2')}>
            <div className='text-primary-900 font-bold text-xl lg:text-3xl'>
              物種辨識中...
            </div>
            <div className='text-primary-900 text-sm lg:text-lg'>
              身為植物獵人的你，必須了解植物的物種特性。在這方面，植物獵人前輩--阿改老師經驗豐富，在他的故事《花開富貴》中或許可以找到線索。觀看《花開富貴》預告解鎖物種特性！
            </div>
            <div className='w-full text-center bg-primary-50 text-primary-800 font-bold py-2 px-6 hover:bg-primary-900 hover:text-primary-100 active:bg-primary-900 active:text-primary-100 rounded-full mt-6' onClick={() => handleScroll()} style={{ cursor: "pointer" }} >
              觀看下方預告解鎖
            </div>
          </div>
          
        </div>

        <div className={classnames(glow && styles.player,'mt-4 mb-8' )} ref={unlock}>
          <ReactPlayer
            url='https://youtu.be/U_udsiBy14Q'
            width={width > MAXWIDTH ? MAXWIDTH + "px" : "80vw"}
            height={width > MAXWIDTH ? MAXWIDTH / 1.78 + "px" : "45vw"}
            muted={false}
            onStart={async() => {wait()}}
          />
        </div>
        
        <div onClick={() => disable ? handleGlow() : handleNextPage()}>
          { !waiting && !disable && <PrimaryButton text='解鎖！' disabled={disable} /> }
          { !waiting && disable && <PrimaryButton text='看預告解鎖' disabled={disable} /> }
          { waiting && <PrimaryButton text={"再等" + remainTxt + "秒"} disabled={true} /> }
        </div>

      </div>
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default ResultPage