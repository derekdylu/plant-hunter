import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

const PrimaryButton = ({text, variant = 'contained', disabled = false}) => {
  return (
    <div className={classnames(!disabled&&styles.shadow)}>
      <button className={classnames(disabled?styles.disabled:styles.primary, `text-5xl ${disabled?"text-neutral-300":"text-neutral-800"}`)}>
        {text}
      </button>
    </div>
  )
}

export default PrimaryButton