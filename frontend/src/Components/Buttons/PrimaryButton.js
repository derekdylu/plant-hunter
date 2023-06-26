import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

const PrimaryButton = ({text, variant = 'contained'}) => {
  return (
    <div className={classnames(styles.shadow)}>
      <button className={classnames(styles.primary, 'text-5xl')}>
        {text}
      </button>
    </div>
  )
}

export default PrimaryButton