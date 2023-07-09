import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'
import useWindowDimensions from '../../Hooks/useWindowDimensions'

import PrimaryButton from '../../Components/Buttons/PrimaryButton'

import background from '../../Assets/StartPage/background.jpg'
import default_image_1 from "../../Assets/ProblemPage/Base/strip1.png"
import default_image_2 from "../../Assets/ProblemPage/Base/strip2.png"

const defaultImageList = [
  default_image_1,
  default_image_2,
]

const default_options = [
  {
    "title": "選項1",
    "score": 0,
    "image": null
  },
  {
    "title": "選項2",
    "score": 1,
    "image": null
  },
  {
    "title": "選項3",
    "score": 2,
    "image": null
  },
  {
    "title": "選項4",
    "score": 3,
    "image": null
  }
]

const MAX_HEIGHT = 650

const ProblemPage = ({problemIndex, problems, options = default_options, grid = false, puppet = null, multiple = false, handleNextPage}) => {
  const [select, setSelect] = useState([])
  const [disabled, setDisabled] = useState(true)
  const { height, ratio } = useWindowDimensions()

  const handleSubmit = (problemIndex) => {
    if (select.length === 0) { return }

    let selected = JSON.parse(localStorage.getItem("plant-hunter"))
    let ops = JSON.parse(localStorage.getItem("ops"))

    select.map(s => selected = selected.concat(options[s].score))
    ops = ops.concat([{select}])

    localStorage.setItem("ops", JSON.stringify(ops))
    localStorage.setItem("plant-hunter", JSON.stringify(selected))
    handleNextPage();

    setSelect([])
    let checkList = document.getElementsByTagName("input")
    for (let i = 0; i < checkList.length; i++) { checkList[i].checked = false }
  }

  const handleClick = (index) => {
    if (multiple) {
      if (select.find((item) => item === index) === undefined) {
        setSelect([...select, index])
      } else {
        setSelect(select.filter((item) => item !== index))
      }
    } else {
      if (select.find((item) => item === index) === undefined) {
        setSelect([index])
        let checkList = document.getElementsByTagName("input")
        for (let i = 0; i < checkList.length; i++) { 
          if (i !== index) { checkList[i].checked = false }
        }
      } else {
        setSelect([])
      }
    }
  }

  useEffect(() => {
    if (select.length === 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [select])

  return (
    <div className={classnames(styles.wrapper, 'container w-screen h-screen max-w-none')}>
      <div className={classnames(styles.problemWrapper, 'flex flex-col items-center justify-center mt-4 lg:mt-8 px-6')}>
        <div className={classnames('flex flex-row items-end justify-center mb-3')}>
          <div className={classnames('text-xl font-medium')}>{problemIndex+1}</div>
          <div className={classnames('text-base font-medium ml-1')}>/ 10</div>
        </div>
        {
          problems?.map((problem, index) => {
            return (
              <div className={classnames(styles.problemTitle, 'text-base font-medium md:text-xl')} key={problemIndex.toString() + index.toString()}>{problem}</div>
            )
          })
        }
      </div>

      <div className={classnames(styles.topCurtain)}></div>
      <div className={classnames(styles.bottomCurtain)}></div>
      <div className={classnames(styles.bottomRightCurtain)}></div>
      
      <div className='absolute flex flex-col w-screen h-screen items-center justify-center pt-56 md:pt-68 pb-36 md:pb-20'>
        <div className='absolute flex flex-col w-4/5 lg:w-full h-full items-center justify-center'>
          <div className={classnames(styles.options, `${grid?"grid grid-cols-2 lg:grid-cols-4 items-center": (ratio > 1.5 && height < MAX_HEIGHT) ? "grid grid-cols-2 items-center gap-x-4" : "flex flex-col items-center"} justify-items-center`)}>
            {
              options?.map((option, index) => {
                return (
                  <div key={problemIndex.toString() + index.toString()} className={classnames(`${ options.length % 2 !== 0 && index === options.length - 1 && "col-span-2" }`)}>
                    <input type="checkbox" id={index} style={{ "opacity": 0, "display": "none" }}></input>
                    <label htmlFor={index} className={classnames(styles.option, `flex flex-col items-center ${option.image === null ? "h-16":"h-auto"}`)} onClick={() => handleClick(index)}>
                      {
                        option.image === null ?
                          <img src={defaultImageList[index % 2]} className={classnames(styles.optionImage)} alt='optionImage' />
                          :
                          <img src={option.image} className={classnames(styles.optionGridImage)} alt='optionImage' />
                      }
                      <div className={classnames(styles.optionTitle)}>{option.title}</div>
                    </label>
                  </div>
                )
              })
            }
          </div>
          <div className={classnames(styles.button, 'mt-3')} onClick={() => !disabled && handleSubmit(problemIndex)}>
            <PrimaryButton text='下一題' disabled={disabled} />
          </div>
        </div>
      </div>
        
      {
        puppet !== null && (
          <div className={classnames(styles.bottomPuppet)} key={problemIndex.toString() + "puppet"}>
            <img src={puppet} alt="puppet" />
          </div>
        )
      }
      
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default ProblemPage