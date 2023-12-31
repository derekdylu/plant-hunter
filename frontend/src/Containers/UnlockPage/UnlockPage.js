import React, { useEffect, useState, useRef } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { FacebookShareButton, LineShareButton } from 'react-share';

import styles from './styles.module.scss'

import background from '../../Assets/StartPage/background.jpg'
import logotype from '../../Assets/StartPage/logotype.png'
import scroll from '../../Assets/ResultPage/scroll.gif'
import logoLeft from '../../Assets/Elements/logo_tr_left.png'
import logoRight from '../../Assets/Elements/logo_tr_right.png'

import fb from '../../Assets/Elements/fb.svg'
import ig from '../../Assets/Elements/ig.svg'
import yt from '../../Assets/Elements/yt.svg'
import web from '../../Assets/Elements/web.svg'

import poster from '../../Assets/ResultPage/poster.png'
import flower1 from '../../Assets/ResultPage/台灣水玉杯.png'
import flower2 from '../../Assets/ResultPage/桃紅蝴蝶蘭.png'
import flower3 from '../../Assets/ResultPage/台灣喜普鞋蘭.png'
import flower4 from '../../Assets/ResultPage/台灣野牡丹藤.png'

import small1 from '../../Assets/ResultPage/水玉杯.png'
import small2 from '../../Assets/ResultPage/蝴蝶.png'
import small3 from '../../Assets/ResultPage/喜普鞋.png'
import small4 from '../../Assets/ResultPage/牡丹.png'

import copyBTN from '../../Assets/Elements/copy-BTN.svg'
import doneBTN from '../../Assets/Elements/copy-BTN-done.svg'
import fbBTN from '../../Assets/Elements/fb-BTN.svg'
import lineBTN from '../../Assets/Elements/line-BTN.svg'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

const mainURL = "https://www.hunter-game.backstagestudio.com.tw/"

const flowerList = [flower1, flower2, flower3, flower4]
const smallList = [small1, small2, small3, small4]

const flowerContent = [
  {
    "index": 0,
    "title": "台灣水玉杯",
    "description": "台灣水玉杯 (Thismia taiwanensis)，是種見光死的幽靈花，世界級的",
    "descriptionMore": "嚴重瀕臨絕種腐生植物，完全無葉綠素，因此除了繁殖下一代以外幾乎都待在地表下，哪怕是花果也是被腐葉覆蓋著，大小大概就咖啡豆這麼大，若不跪在地上仔細翻找幾乎看不見。人類一腳採下就能滅族或是滅種，上山走路要小心點！你一個無心或有意的動作可能就輕易毀了好幾萬年演化來的物種！",
    "characteristic": "你是一個把自己真實個性與想法隱藏得很好的人。你善於控制自己的情緒和表達，常常給人一種神秘感，而且更喜歡在自己感到安全和舒適的環境中才打開心扉。",
    "partner": {
      "index": 3,
      "title": "台灣野牡丹藤",
      "description": "與他的旅途中，總能讓你感到溫暖。",
    },
  },
  {
    "index": 1,
    "title": "桃紅蝴蝶蘭",
    "description": "桃紅蝴蝶蘭 (Phalaenopsis equestris) 原生於菲律賓和台灣，因產於",
    "descriptionMore": "小蘭嶼而得名。1934 年有學者在小蘭嶼植物標本採集時，發現了極具玩賞價值的桃紅蝴蝶蘭，七零年代台灣種植蘭花風氣盛行，連小蘭嶼這種無人島上的都被採光光，就是紅顏薄命啦！直到 2009 年，阿改參與屏科大計畫去小蘭嶼做資源調查，上島第四天終於找到了「夢幻物種」蘭嶼桃紅蝴蝶蘭，當時共計記錄到九株，是目前台灣僅餘的植株。為避免野生蘭在台灣消失，相關植物保育單位計劃進行復育工作，希望繁殖更多的小苗，並設法移植回原生地。",
    "characteristic": "你內在外貌都出眾，很受大家喜歡，是人人都愛的萬人迷，也樂於展現自己。人們往往被你的熱情和開朗所吸引。",
    "partner": {
      "index": 2,
      "title": "台灣喜普鞋蘭",
      "description": "你總是被他的想法所驚艷！",
    },
  },
  {
    "index": 2,
    "title": "台灣喜普鞋蘭",
    "description": "台灣喜普鞋蘭 (Cypripedium formosanum) 屬於台灣特有種植物 (EN 級)。主要產於",
    "descriptionMore": "中央山脈，南投、花蓮較多，海拔 1500 至 3000 公尺山區的針葉林下，阿改第一次是在書本裡看到照片，真正在野外看到的時候，心想怎麼有這麼漂亮的花，於是受不了就採了！但是因為是長在高海拔的，在平地難以生存，所以採回去也沒種活。因有高度觀賞價值，遭受極大的濫採壓力，棲地喪失與破碎化，現已不容易見到其野外族群，已列入瀕危物種。",
    "characteristic": "你是個很有自己想法的人，不鳴則已，一鳴驚人。你擁有獨立思考和堅定立場的特質。你對於自己的價值觀和信念非常堅持，並且勇於表達自己的意見。",
    "partner": {
      "index": 1,
      "title": "桃紅蝴蝶蘭",
      "description": "與他的旅途總是歡快。",
    },
  },
  {
    "index": 3,
    "title": "台灣野牡丹藤",
    "description": "台灣野牡丹藤 (Medinilla formosana) 是台灣特有植物，台灣維管束植物紅皮書評估",
    "descriptionMore": "為 VU 等級。 阿改有一次去恆春山上採集，第一次在原生地見到台灣野牡丹藤，爬滿整棵樹上，一整個滿滿的為之震撼，居然這麼美，從此之後因為它愛上了恆春半島。在野外已極罕見的台灣野牡丹藤，竟然在花市、公園常見，以開出一串一串繽紛燦爛淡粉紅色的小花，其一層一層之花果造型，非常吸引人。",
    "characteristic": "你很平易近人、接地氣。個性溫和、友善，也容易相處。你喜歡與他人建立親密的關係，並且樂於傾聽和支持他人。你可喜歡和家人朋友一起度過寧靜的時光，並且擅長在團體中建立和諧的氛圍。",
    "partner": {
      "index": 0,
      "title": "台灣水玉杯",
      "description": "深度的交流是舒服的旅行方式。",
    },
  }
]

const UnlockPage = ({result}) => {
  const [alert, setAlert] = useState(false)
  const [showAction, setShowAction] = useState(false)
  const actionRef = useRef(null)
  const [readMore, setReadMore] = useState(false)
  const [dev] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false)
      }, 1000)
    }
  }, [alert])

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (actionRef.current && !actionRef.current.contains(event.target)) {
        setShowAction(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [actionRef]);

  const postShare = async (val) => {
    const response = await fetch('/.netlify/functions/post_share', {
      method: 'POST',
      body: JSON.stringify({
        "share": val
      })
    })

    const data = await response.json()
    dev && console.log(data)
  }

  return (
    <div className={classnames(styles.container, 'container w-screen')}>
      <div className={classnames('flex flex-col w-screen items-center justify-start px-6')}>
        <div className={classnames('flex flex-row w-full items-center justify-between')}>
          <Link to="/" onClick={() => window.location.reload()}>
            <img src={logotype} alt="logo" className={classnames('w-24 md:w-52 mt-4 mb-4 md:mb-0')}/>
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

        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-8 md:mb-16'>
          <div className='flex flex-col items-center justify-center md:items-center md:justify-center'>
            <img src={flowerList[result]} alt="flower" className={classnames(styles.flower, 'w-4/5 sm:w-3/5 md:w-full')} />
          </div>

          <div className={classnames('flex flex-col w-full items-start md:justify-center mt-5 mb-16 md:my-0 xl:pr-32 md:gap-2')}>
            <div className={classnames(styles.title, 'font-bold mt-4 p-2 mb-1')}>
              你的靈魂植物性格
            </div>
            <div className={classnames(styles.description, 'mt-2 text-white')}>
              {flowerContent[result].characteristic}
            </div>

            <div className={classnames(styles.title, 'font-bold mt-4 p-2 mb-1')}>
              你的最佳冒險拍檔
            </div>
            <div className="flex flex-row gap-2 mt-2 w-full">
              <img src={smallList[flowerContent[result].partner.index]} alt="flower_small" className={classnames('w-24 h-24 mt-0')} />
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
          </div>
        </div>

        <div onClick={() => postShare("download")}>
          <Link to={"/" + result + ".jpg"} target="_blank">
            <PrimaryButton text='分享結果' variant='secondary'/>
          </Link>
        </div>

        <Link to="/" onClick={() => window.location.reload()}>
          <PrimaryButton text='再測一次' variant='text'/>
        </Link>

        <div className='flex flex-row items-center justify-center mt-8 gap-2'>
          <div className='text-white mr-3'>
            分享遊戲
          </div>

          <div onClick={() => postShare("fb")}>
            <FacebookShareButton
              url={mainURL}
              hashtag={"#"+flowerContent[result].title}
            >
              <img src={fbBTN} alt="fb-share" width={40} height={40} />
            </FacebookShareButton>
          </div>

          <div onClick={() => postShare("line")}>
            <LineShareButton
              url={mainURL}
              title={"#"+flowerContent[result].title}
            >
              <img src={lineBTN} alt="line-share" width={40} height={40} />
            </LineShareButton>
          </div>

          <div onClick={() => {navigator.clipboard.writeText(mainURL); setAlert(true); postShare("copy link");}} style={{ cursor: "pointer" }} >
            {
              alert ?
              <img src={doneBTN} alt="done-share" width={40} height={40} />
              :
              <img src={copyBTN} alt="copy-share" width={40} height={40} />
            }
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-12 text-center text-white font-bold animate-bounce'>
          <div>
            等等！
          </div>
          <div id="scrollAnchor">
            還有更多精彩內容！
          </div>
        </div>
        <img src={scroll} alt="scroll" className='mt-4' style={{ zIndex: "-1"}} />

      </div>

      <div className={classnames(styles.promotion, 'flex flex-col w-screen items-center justify-start px-6 pb-16')}>
        <div className="mt-80 md:mt-64 mb-4 max-w-md">
          做完測驗後，想更了解「植物獵人」這個職業嗎？歡迎點擊以下的影片連結，讓我們用20分鐘跟你說個關於「植物獵人—洪信介」的故事。
        </div>

        <a href="https://youtu.be/Ow8hJBXoH_M" rel="noreferrer" target="_blank">
          <PrimaryButton text='觀看影片'/>
        </a>

        <div className='flex flex-col md:flex-row md:gap-8 md:mb-4 items-center'>
          <img src={poster} alt="poster" className='mt-8 md:w-1/2 w-full h-fit'/>

          <div className='flex flex-col items-center md:justify-center'>
            <div className={classnames('flex flex-col w-full items-start mt-5 mb-8 max-w-md')}>
              <div className={classnames(styles.title2, 'font-bold text-lg text-primary-200 mt-4 p-2 mb-1')}>
                作品介紹
              </div>
              <div className={classnames(styles.description, 'mt-2')}>
                洪信介 (阿改老師)，是個高中肄業卻能靠肉眼辨認上千種台灣植物的植物獵人，帶著他用原子筆手繪的植物圖受邀參與世界三大藝術展覽——卡賽爾文件展。《花開富貴》記錄了這位想要「名利雙收」的植物獵人，如何在森林裡找到自己的一片天，更為台灣的植物保育盡一份心。
              </div>
            </div>

            <div className={classnames('flex flex-col w-full items-start mt-5 mb-0 max-w-md')}>
              <div className={classnames(styles.title2, 'font-bold text-lg text-primary-200 mt-4 p-2 mb-1')}>
                關於《怪咖》計畫
              </div>
              <div className={classnames(styles.description, 'mt-2')}>
                以紀錄片為起點，用生命感動生命，開展改變社會的行動網絡。怪咖計畫用三年拍攝18支紀錄短片，帶出不同面向的社會議題；透過線上線下公播和體制內外教師研習、撰寫教案與課程入班的方式，藉由新媒體的擴散以及教師的帶領思辨或行動提案，我們期許從校園扎根，再用行動擴散到社會，串聯民間企業團體一起行動，深化議題的討論，擴大社會影響力。
              </div>
            </div>
            
            <div className={classnames(`flex flex-col w-full text-center items-center md:items-start mt-6`)}>
              {
                showAction &&
                <div className={classnames(styles.actionPanel, 'absolute flex flex-row bg-primary-50 py-2 px-3 w-fit gap-2 rounded drop-shadow mb-2')} ref={actionRef}>
                  <a href="https://www.facebook.com/theweirdointaiwan" target="_blank" rel="noreferrer">
                    <img src={fb} alt="fb" width={40} height={40} style={{ cursor: "pointer" }} className='hover:bg-primary-100 rounded' />
                  </a>
                  <a href="https://youtube.com/@theweirdointaiwan" target="_blank" rel="noreferrer">
                    <img src={yt} alt="yt" width={40} height={40} style={{ cursor: "pointer" }} className='hover:bg-primary-100 rounded' />
                  </a>
                  <a href="https://www.instagram.com/theweirdointaiwan" target="_blank" rel="noreferrer">
                    <img src={ig} alt="ig" width={40} height={40} style={{ cursor: "pointer" }} className='hover:bg-primary-100 rounded' />
                  </a>
                  <a href="https://www.backstagestudio.com.tw" target="_blank" rel="noreferrer">
                    <img src={web} alt="web" width={40} height={40} style={{ cursor: "pointer" }} className='hover:bg-primary-100 rounded' />
                  </a>
                </div>
              }
              <div className={classnames(`w-full md:w-fit bg-primary-50 text-primary-900 font-bold py-3 px-4 hover:bg-primary-900 hover:text-primary-100 active:bg-primary-900 active:text-primary-100 rounded-full my-2`)} style={{ cursor: "pointer" }} onClick={() => setShowAction(!showAction)}>
                關注《怪咖計畫》
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default UnlockPage