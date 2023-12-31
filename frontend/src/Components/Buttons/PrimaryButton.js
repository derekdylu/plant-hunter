import React from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

const PrimaryButton = ({text, variant = "primary", disabled = false}) => {
  return (
    <div className={classnames(!disabled && variant !== 'text' && styles.shadow)}>
      <button className={classnames(
                          disabled ? styles.disabled : styles.button, 
                          styles[variant], 
                          `
                            text-3xl md:text-5xl tracking-wider font-mono pb-2 
                            ${variant === "primary" ? "active:text-primary-100" : "active:text-neutral-900"}
                            ${disabled ? "text-neutral-300" : variant === "text" ? "text-primary-200" : "text-neutral-800"}
                          `
                        )}>
        {text}
      </button>
    </div>
  )
}

export default PrimaryButton