import React, {useState} from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

import background from '../../Assets/StartPage/background.png'

const default_image = "https://images.unsplash.com/photo-1586074299757-dc655f18518c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"

const default_options = [
  {
    "title": "選項1",
    "score": 0,
    "image": default_image,
  },
  {
    "title": "選項2",
    "score": 1,
    "image": default_image,
  },
  {
    "title": "選項3",
    "score": 2,
    "image": default_image,
  },
  {
    "title": "選項4",
    "score": 3,
    "image": default_image,
  }
]

const ProblemPage = ({problemIndex, problems, options = default_options, handleNextPage}) => {
  const [select, setSelect] = useState([])

  const handleSubmit = (problemIndex) => {
    if (select.length === 0) { return }

    console.log("clk", problemIndex, select) // NOTE
    let prev = localStorage.getItem("plant-hunter")
    let selected = JSON.parse(prev)
    let _selected = selected.concat(select)
    localStorage.setItem("plant-hunter", JSON.stringify(_selected))
    console.log("selected", localStorage.getItem("plant-hunter")) // NOTE
    handleNextPage();

    setSelect([])
    let checkList = document.getElementsByTagName("input")
    for (let i = 0; i < checkList.length; i++) { checkList[i].checked = false }
  }

  const handleClear = () => {
    console.log("clear")
    localStorage.clear()
    localStorage.setItem("plant-hunter", JSON.stringify([]))
  }

  const handleClick = (index) => {
    if (select.find((item) => item === index) === undefined) {
      setSelect([...select, index])
    } else {
      setSelect(select.filter((item) => item !== index))
    }
  }

  return (
    <div className={classnames(styles.wrapper, 'container w-screen h-screen max-w-none')}>
      <div className={classnames(styles.problemWrapper, 'flex flex-col items-center justify-center mt-16')}>
        <div className={classnames('flex flex-row items-center justify-center mb-3')}>
          <div className={classnames(styles.problemTitle, 'text-lg')}>{problemIndex+1}</div>
          <div className={classnames(styles.problemTitle, 'text-base')}>/10</div>
        </div>
        {
          problems?.map((problem, index) => {
            return (
              <div className={classnames(styles.problemTitle, 'text-base')} key={index}>{problem}</div>
            )
          })
        }
        <button onClick={() => handleSubmit(problemIndex)}>submit</button>
        <button onClick={() => handleClear()}>clear</button>
      </div>

      <div className={classnames(styles.topCurtain)}>top</div>
      <div className={classnames(styles.bottomCurtain)}>bom</div>

      <div className={classnames(styles.options, 'grid grid-cols-2 lg:grid-cols-4 items-end lg:items-center justify-items-center px-3 md:px-40 lg:px-16 xl:px-36 pt-56 pb-24 lg:pb-0')}>
        {
          options?.map((option, index) => {
            return (
              <div key={index}>
                <input type="checkbox" id={index} style={{ "opacity": 0 }}></input>
                <label htmlFor={index} className={classnames(styles.option, '')} onClick={() => handleClick(index)}>
                  <img src={option.image} className={classnames(styles.optionImage)} alt='optionImage' />
                  <div className={classnames(styles.optionTitle)}>{option.title}</div>
                </label>
              </div>
            )
          })
        }
      </div>
      <img src={background} className={classnames(styles.background)} alt='background' />
    </div>
  )
}

export default ProblemPage