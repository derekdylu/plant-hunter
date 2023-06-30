import React, { useState, useEffect } from 'react'

const default_orderAdjustmentList = [1,0,2,3]

const ResultPage = ({resultList, orderAdjustmentList = default_orderAdjustmentList}) => {
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

  const postResult = async () => {
    const response = await fetch('/.netlify/functions/post_result', {
      method: 'POST',
      body: JSON.stringify({
        "selection": JSON.parse(localStorage.getItem('ops')),
        "result": result
      })
    })
    const data = await response.json()
    console.log("netlify function: post result", data)
  }

  useEffect(() => {
    calculate()
    postResult()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>result: {result}</div>
  )
}

export default ResultPage