import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import ReactPlayer from 'react-player'

import styles from './styles.module.scss'

import background from '../../Assets/StartPage/background.png'
import logotype from '../../Assets/StartPage/logotype.png'

import flower1 from '../../Assets/ResultPage/台灣水玉杯.png'
import flower2 from '../../Assets/ResultPage/桃紅蝴蝶蘭.png'
import flower3 from '../../Assets/ResultPage/台灣喜普鞋蘭.png'
import flower4 from '../../Assets/ResultPage/台灣野牡丹藤.png'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const DELAY = 0

const flowerList = [flower1, flower2, flower3, flower4]

const flowerContent = [
  {
    "index": 0,
    "title": "台灣水玉杯",
    "description": "台灣水玉杯 (學名：Thismia taiwanensis)，是種見光死的幽靈花，世界級的嚴重瀕臨絕種腐生植物，完全無葉綠素，因此除了繁殖下一代以外幾乎都待在地表下，哪怕是花果也是被腐葉覆蓋著，大小大概就飯粒這麼大，若不跪在地上仔細翻找幾乎看不見。人類一腳採下就能滅族或是滅種，上山走路要小心點你一個無心或有意的動作可能就輕易毀了好幾萬年演化來的物種！",
    "characteristic": "你是一個把自己真實個性與想法隱藏得很好的人。你善於控制自己的情緒和表達，常常給人一種神秘感，而且更喜歡在自己感到安全和舒適的環境中才打開心扉。",
    "partner": {
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
      "title": "台灣喜普鞋蘭",
      "description": "你總是被他的想法所驚艷！",
    },
  }
]

const default_orderAdjustmentList = [1,0,2,3]

const ResultPage = ({resultList, orderAdjustmentList = default_orderAdjustmentList, handleNextPage}) => {
  const [result, setResult] = useState(0)
  const selected = JSON.parse(localStorage.getItem('plant-hunter'))
  const [disable, setDisable] = useState(true)

  const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    setResult(resList[0].index)
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
    console.log("netlify function: post result", data)
  }

  useEffect(() => {
    calculate()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classnames('container mx-auto')}>
      <div className={classnames('flex flex-col w-full items-center justify-start px-6 pb-40')}>
        <div className={classnames('flex flex-row w-full items-start')}>
          <img src={logotype} alt="logo" className={classnames('w-24 mt-4 mb-4')}/>
        </div>

        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 md:mb-16'>
          <div className='flex flex-col items-center justify-center md:items-center md:justify-center'>
            <img src={flowerList[result]} alt="flower" className={classnames(styles.flower, 'w-4/5 sm:w-3/5 md:w-full')} />
          </div>

          <div className={classnames('flex flex-col w-full items-start md:justify-center mt-5 mb-16 md:my-0')}>
            <div className={classnames(styles.title, 'font-bold p-2 mb-1')}>
              關於{flowerContent[result].title}
            </div>
            <div className={classnames(styles.description, 'mt-2 text-white')}>
              {flowerContent[result].description}
            </div>
          </div>
        </div>

        <div className='text-center text-white'>
          想知道誰是你的性格與最佳拍檔是誰？
        </div>
        <div className='text-center text-white'>
          觀看《花開富貴》預告立馬解鎖！
        </div>

        <div className='mt-4 mb-8'>
          <ReactPlayer
            url='https://youtu.be/Q65_LB3-ko4'
            width={"80vw"}
            height={"45vw"}
            muted={true}
            onStart={async() => {
              await wait(DELAY)
              setDisable(false)
            }}
          />
        </div>
        
        <div onClick={() => handleNextPage()}>
          <PrimaryButton text='解鎖' disabled={disable} />
        </div>
        
      </div>
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default ResultPage