import React, { useState } from 'react'

import StartPage from './StartPage/StartPage';
import TutorialPage from './TutorialPage/TutorialPage';
import ProblemPage from './ProblemPage/ProblemPage';
import ResultPage from './ResultPage/ResultPage';
import UnlockPage from './UnlockPage/UnlockPage';

import Q1_A from '../Assets/ProblemPage/Q1/Q1_A.png';
import Q1_B from '../Assets/ProblemPage/Q1/Q1_B.png';
import Q1_C from '../Assets/ProblemPage/Q1/Q1_C.png';
import Q1_D from '../Assets/ProblemPage/Q1/Q1_D.png';

import Q2_A from '../Assets/ProblemPage/Q2/Q2_A.png';
import Q2_B from '../Assets/ProblemPage/Q2/Q2_B.png';
import Q2_C from '../Assets/ProblemPage/Q2/Q2_C.png';
import Q2_D from '../Assets/ProblemPage/Q2/Q2_D.png';

import Q3_A from '../Assets/ProblemPage/Q3/Q3_A.png';
import Q3_B from '../Assets/ProblemPage/Q3/Q3_B.png';
import Q3_C from '../Assets/ProblemPage/Q3/Q3_C.png';
import Q3_D from '../Assets/ProblemPage/Q3/Q3_D.png';

import Q4 from '../Assets/ProblemPage/Q4/Q4.png';
import Q5 from '../Assets/ProblemPage/Q5/Q5.png';
import Q6 from '../Assets/ProblemPage/Q6/Q6.png';
import Q7 from '../Assets/ProblemPage/Q7/Q7.png';
import Q8 from '../Assets/ProblemPage/Q8/Q8.png';
import Q9 from '../Assets/ProblemPage/Q9/Q9.png';
import Q10 from '../Assets/ProblemPage/Q10/Q10.png';

const data = [
  {
    "index": 0,
    "title": ["要執行任務，你需要有一套最適合的衣著。你想選擇哪一套服裝出任務？"],
    "grid": true,
    "puppet": null,
    "multiple": false,
    "options": [
      {
        "title": "",
        "score": [0],
        "image": Q1_A
      },
      {
        "title": "",
        "score": [1],
        "image": Q1_B
      },
      {
        "title": "",
        "score": [2],
        "image": Q1_C
      },
      {
        "title": "",
        "score": [3],
        "image": Q1_D
      }
    ]
  },
  {
    "index": 1,
    "title": ["選擇好了衣裝，你還需要出任務用的後背包。你想在背包裡放些什麼呢？(多選)"],
    "grid": true,
    "puppet": null,
    "multiple": true,
    "options": [
      {
        "title": "",
        "score": [3],
        "image": Q2_A
      },
      {
        "title": "",
        "score": [2,3],
        "image": Q2_B
      },
      {
        "title": "",
        "score": [0],
        "image": Q2_C
      },
      {
        "title": "",
        "score": [1],
        "image": Q2_D
      }
    ]
  },
  {
    "index": 2,
    "title": ["上山出任務！第一晚要先把肚子填飽才行。你的第一餐要選擇吃什麼好呢？"],
    "grid": true,
    "puppet": null,
    "multiple": false,
    "options": [
      {
        "title": "",
        "score": [0],
        "image": Q3_B
      },
      {
        "title": "",
        "score": [2],
        "image": Q3_D
      },
      {
        "title": "",
        "score": [1],
        "image": Q3_A
      },
      {
        "title": "",
        "score": [3],
        "image": Q3_C
      }
    ]
  },
  {
    "index": 3,
    "title": ["任務開始！噢不，你遇到了湍急的河流。根據地圖，你必須渡河，任務才能繼續下去，你會："],
    "grid": false,
    "puppet": Q4,
    "multiple": false,
    "options": [
      {
        "title": "強行渡河，就是游過去！",
        "score": [0],
        "image": null
      },
      {
        "title": "自己用繩索做一個浮橋",
        "score": [2],
        "image": null
      },
      {
        "title": "踩在石頭上小心跨越河流",
        "score": [0,1],
        "image": null
      },
      {
        "title": "先坐著休息，等流速變緩後再渡河",
        "score": [3],
        "image": null
      }
    ]
  },
  {
    "index": 4,
    "title": ["任務總是意外重重。你不小心在森林裡迷路了三天，你又累又餓，只好就地取材看看附近有什麼可以吃，你會："],
    "grid": false,
    "puppet": Q5,
    "multiple": false,
    "options": [
      {
        "title": "挖出倒木裡面的雞母蟲烤來吃",
        "score": [1],
        "image": null
      },
      {
        "title": "抓著正在飛的糞金龜當成口香糖吃",
        "score": [2],
        "image": null
      },
      {
        "title": "剖開竹子喝裡面的水跟吃裡面的蟲",
        "score": [0],
        "image": null
      },
      {
        "title": "用衣服包住青苔把水擠出來喝",
        "score": [3],
        "image": null
      },
      {
        "title": "不吃不喝",
        "score": [0],
        "image": null
      }
    ]
  },
  {
    "index": 5,
    "title": ["皇天不負苦心人，你終於看到目標植物！但確認族群數量後，卻發現只剩一株了，你會："],
    "grid": false,
    "puppet": Q6,
    "multiple": false,
    "options": [
      {
        "title": "因為很珍貴，採回去給專家做標本",
        "score": [1,2],
        "image": null
      },
      {
        "title": "僅紀錄GPS與影像，不採集回去",
        "score": [0,3],
        "image": null
      }
    ]
  },
  {
    "index": 6,
    "title": ["你在爬樹時看植物太入迷了，不小心跌了下去。暈過去以後，你夢到了："],
    "grid": false,
    "puppet": Q7,
    "multiple": false,
    "options": [
      {
        "title": "水鹿好奇舔你的臉叫醒你",
        "score": [3],
        "image": null
      },
      {
        "title": "遠方森林裡的鳥組成合唱團",
        "score": [2],
        "image": null
      },
      {
        "title": "與穿山甲躲在樹洞裡睡覺",
        "score": [0],
        "image": null
      },
      {
        "title": "你跟著幾隻蝴蝶翩翩起舞",
        "score": [1],
        "image": null
      }
    ]
  },
  {
    "index": 7,
    "title": ["你突然發現唯一的長褲已經完全破裂，此時在滿佈荊棘樹林，你會："],
    "grid": false,
    "puppet": Q8,
    "multiple": false,
    "options": [
      {
        "title": "不管了！繼續採集",
        "score": [1,2],
        "image": null
      },
      {
        "title": "用既有材料包包綁綁修補褲子",
        "score": [0,3],
        "image": null
      }
    ]
  },
  {
    "index": 8,
    "title": ["倒數第二夜，下午時你發現自己發著高燒很不舒服，你會："],
    "grid": false,
    "puppet": Q9,
    "multiple": false,
    "options": [
      {
        "title": "繼續睡覺休息，看會不會好一點",
        "score": [2],
        "image": null
      },
      {
        "title": "四處尋找草藥，採桑黃煮來喝",
        "score": [0],
        "image": null
      },
      {
        "title": "自行徒步下山",
        "score": [1],
        "image": null
      },
      {
        "title": "花三十萬叫直升機拯救自己",
        "score": [3],
        "image": null
      }
    ]
  },
  {
    "index": 9,
    "title": ["恭喜你！任務結束！回頭來看這次的經歷，你覺得一個厲害的植物獵人，最需要具備哪個特質？"],
    "grid": false,
    "puppet": Q10,
    "multiple": false,
    "options": [
      {
        "title": "冒險家精神",
        "score": [0],
        "image": null
      },
      {
        "title": "敏銳的觀察力",
        "score": [3],
        "image": null
      },
      {
        "title": "好奇心",
        "score": [2],
        "image": null
      },
      {
        "title": "良好的體能",
        "score": [1],
        "image": null
      }
    ]
  }
]

const Game = () => {
  const [phase, setPhase] = useState(0); // 0, 1, 2, 3, 4
  const [problem, setProblem] = useState(0); // 0, 1, 2, 3, 4, 5...
  const [resultList, setResultList] = useState([])
  const [result, setResult] = useState(0)

  const handleNextPage = () => {
    if (phase === 0) {
      setPhase(1);
    }
    if (phase === 1) {
      setPhase(2);
    }
    if (phase === 3) {
      setResult(JSON.parse(localStorage.getItem('result')))
      setPhase(4);
    }
    if (phase === 2 && problem === data.length - 1) {
      setResultList(JSON.parse(localStorage.getItem('plant-hunter')))
      setPhase(3);
    }
    if (phase === 2 && problem < data.length - 1) {
      setProblem(problem + 1);
    }
  }

  return (
    <>
      {phase === 0 && <StartPage handleNextPage={handleNextPage} /> }
      {phase === 1 && <TutorialPage handleNextPage={handleNextPage} /> }
      {phase === 2 && <ProblemPage 
                        problemIndex={problem}
                        problems={data[problem].title}
                        options={data[problem].options}
                        grid={data[problem].grid}
                        puppet={data[problem].puppet}
                        multiple={data[problem].multiple}
                        handleNextPage={handleNextPage} 
                      />}
      {phase === 3 && <ResultPage resultList={resultList} handleNextPage={handleNextPage} />}
      {phase === 4 && <UnlockPage result={result} />}
    </>
  )
}

export default Game