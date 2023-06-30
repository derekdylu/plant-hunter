import React, { useEffect, useState } from 'react'

const default_resultList = [
  {
    "index": 0,
    "title": "a type people",
    "description": "a type people"
  },
  {
    "index": 1,
    "title": "a type people",
    "description": "a type people"
  },
  {
    "index": 2,
    "title": "a type people",
    "description": "a type people"
  },
  {
    "index": 3,
    "title": "a type people",
    "description": "a type people"
  }
]

const default_orderAdjustmentList = [1,0,2,3]

const ResultPage = ({resultList = default_resultList, orderAdjustmentList = default_orderAdjustmentList}) => {
  const [result, setResult] = useState(-1)
  const selected = JSON.parse(localStorage.getItem('plant-hunter'))
  console.log("result page", selected) // NOTE

  const calculate = () => {
    let resList = []
    for (let i = 0; i < resultList.length; i++) {
      const res = {
        "index": i,
        "score": selected.filter(s => s === i).length
      }
      console.log("res", res)
      resList = resList.concat(res)
    }

    resList.sort((a, b) => b.score - a.score || orderAdjustmentList.indexOf(a.index) - orderAdjustmentList.indexOf(b.index))
    console.log("resList", resList)
    setResult(resList[0].index)
  }

  useEffect(() => {
    calculate()
  }, [])

  return (
    <div>result: {result}</div>
  )
}

export default ResultPage