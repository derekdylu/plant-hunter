import React, { useState } from 'react';
import './App.css';

import StartPage from './Containers/StartPage/StartPage';
import ProblemPage from './Containers/ProblemPage/ProblemPage';
import ResultPage from './Containers/ResultPage/ResultPage';

const data = [
  {
    "index": 0,
    "title": ["要執行任務，你需要有一套最適合的衣著。你想選擇哪一套服裝出任務？"],
    "options": [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    "index": 1,
    "title": ["選擇好了衣裝，你還需要出任務用的後背包。你想在背包裡放些什麼呢？"],
    "options": [
      "12號夾鏈袋",
      "草格仔",
      "圓鍬",
      "保鮮膜",
    ]
  },
  {
    "index": 2,
    "title": ["上山出任務！第一晚要先把肚子填飽才行。你的第一餐要選擇吃什麼好呢？"],
    "options": [
      "熱騰騰的白粥配上奶茶",
      "一碗韓國泡麵配上鮪魚罐頭",
      "超商買的即食香腸與三角飯糰",
      "簡單的營養口糧與營養棒"
    ]
  },
  {
    "index": 3,
    "title": ["任務開始！噢不，你遇到了湍急的河流。根據地圖，你必須渡河，任務才能繼續下去，此時你會選擇："],
    "options": [
      "強行渡河，就是游過去！",
      "自己用繩索做一個浮橋",
      "踩在石頭上小心跨越河流",
      "先坐著休息，等河流流速變緩之後再渡河"
    ]
  },
  {
    "index": 4,
    "title": ["任務總是意外重重。你不小心在森林裡迷路了三天，現在你又累又餓，你決定要就地取材，看看附近有什麼可以吃的，於是你選擇："],
    "options": [
      "挖出倒木裡面的雞母蟲烤來吃",
      "抓著正在飛的糞金龜，把它當成口香糖吃",
      "剖開竹子，喝裏面的水跟吃竹子裡面的蟲",
      "抓一大把青苔，用衣服包住把水擠出來吸吮",
      "不吃不喝"
    ]
  },
  {
    "index": 5,
    "title": ["睡了一覺後，你要繼續任務了！皇天不負苦心人，你終於看到目標植物了！但是，確認族群數量後，發現只剩一株了，此時你會："],
    "options": [
      "因為數量很少，所以採回去給專家做標本",
      "將他在原地，標定GPS、拍照紀錄，選擇不採集回去"
    ]
  },
  {
    "index": 6,
    "title": ["你在爬樹看這株植物的時候，不小心看得太入迷，結果失手就從三層樓高摔落下來，滾了好幾圈，恢復意識後你會先"],
    "options": [
      "檢查相機有沒有摔壞",
      "動動筋骨確認身體",
      "躺著休息回顧人生"
    ]
  },
  {
    "index": 7,
    "title": ["你發現你唯一的長褲已經完全破裂，此時在滿佈荊棘樹林"],
    "options": [
      "不管了！選擇繼續採集",
      "用既有材料包一包綁一綁修補褲子"
    ]
  },
  {
    "index": 8,
    "title": ["倒數第二夜，下午時分你發現身體發高燒，很不舒服，你會："],
    "options": [
      "繼續睡覺休息，看會不會好一點",
      "四處找中草藥，採桑黃煮來喝",
      "身體很不舒服，決定自己下山",
      "用三十萬叫直升機來拯救自己"
    ]
  },
  {
    "index": 9,
    "title": ["恭喜你！任務結束。回頭來看這次的經歷，你覺得做一個厲害的植物獵人，最需要具備的是哪個特質？"],
    "options": [
      "冒險家精神",
      "敏銳的觀察力",
      "好奇心",
      "良好的體能"
    ]
  }
]


function App() {
  const [phase, setPhase] = useState(0); // 0, 1, 2
  const [problem, setProblem] = useState(0); // 0, 1, 2, 3

  const handleNextPage = () => {
    if (phase === 0) {
      setPhase(1);
    }
    if (phase === 1 && problem === data.length - 1) {
      setPhase(2);
    }
    if (phase === 1 && problem < data.length - 1) {
      setProblem(problem + 1);
    }
  }

  return (
    <>
      { phase === 0 && <StartPage handleNextPage={handleNextPage} /> }

      { phase === 1 && <ProblemPage problemIndex={problem} problems={data[problem].title} handleNextPage={handleNextPage} /> }

      { phase === 2 && <ResultPage /> }
    </>
  );
}

export default App;
