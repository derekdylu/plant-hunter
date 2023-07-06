import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import logotype from '../Assets/StartPage/logotype.png'

const content = [
  "為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie，繼續使用本網站或按下開始探索即表示您同意本站使用 Cookie 及相關技術。若您不願接受 Cookie 的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie 的寫入，但可能會導致網站某些功能無法正常執行。",
  "隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。",
  "當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。",
  "於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。",
  "本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。",
  "如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。",
  "本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。",
  "本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。前項但書之情形包括不限於：經由您書面同意。法律明文規定。為免除您生命、身體、自由或財產上之危險。與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。有利於您的權益。本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。",
  "本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。"
]

const Terms = () => {
  return (
    <div className={classnames(styles.background, '')}>
      <div className='container mx-auto px-8 pb-16'>
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
            隱私政策
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